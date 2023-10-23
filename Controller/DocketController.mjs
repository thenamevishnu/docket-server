import csv from "csvtojson"
import { docket } from "../Model/DocketModel.mjs"
import pkg from "xlsx"

const csvToJson = async (req, res) => {
    try{
        const xlsxFilePath = "./Assets/purchaseOrderFile.xlsx";

        const workbook = pkg.readFile(xlsxFilePath);

        const csvData = pkg.utils.sheet_to_csv(workbook.Sheets[workbook.SheetNames[0]]);

        csv().fromString(csvData).then(response => {
            let Supplier = null
            let poNumber = null
            const result = response.map((item) => {
                if(item.Supplier=="" && item["PO Number"]==""){
                    return {...item, Supplier: Supplier, "PO Number": poNumber}
                }else if(item.Supplier==""){
                    return {...item, Supplier: Supplier}
                }else if(item["PO Number"]==""){
                    return {...item, "PO Number": poNumber}
                }else{
                    Supplier = item.Supplier
                    poNumber = item["PO Number"]
                    return item
                }
            })
            res.json(result)
        })
    }catch(err){
        console.log(err);
    }
}

const saveDocket = async (req, res) => {
    try{
        const {docketData} = req.body
        await docket.insertMany([docketData])
        res.json({statusCode: 200})
    }catch(err){
        console.log(err);
    }
}

const getDockets = async (req, res) => {
    try{
        const dockets = await docket.find()
        console.log(dockets, "hey");
        res.json(dockets ?? [])
    }catch(err){
        console.log(err)
    }
} 

export default {csvToJson, saveDocket, getDockets}