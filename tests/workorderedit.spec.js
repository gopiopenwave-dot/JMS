const {test,expect} = require('@playwright/test');
const {workedittestdata} = require('../testdate/Workorderedit');
const {Workorderedit} = require('../pageobjects/Workedit');
const {Workorder} = require('../pageobjects/Workordercreation');
const {workorderTestData} = require('../testdate/WorkorderTestdate');


test ('Edit Workorder', async ({page}) => {
    const workorder = new Workorder(page);
    const testdata = workorderTestData;

    await workorder.launchurl();
    await workorder.login(testdata.username, testdata.password);
    await workorder.createworkorder(testdata.client, 
        testdata.jobtype, 
        testdata.jobno, 
        testdata.operationcode, 
        testdata.receiveddate, 
        testdata.priority, 
        testdata.startdate, 
        testdata.enddate, 
        testdata.sorcode, 
        testdata.fullsorcode, 
        testdata.workdescription, 
        testdata.address, 
        testdata.postalcode, 
        testdata.contactname, 
        testdata.contactnumber, 
        testdata.supervisorname, 
        testdata.supervisornumber, 
        testdata.remarks, 
        testdata.technician, 
        testdata.status);
    await workorder.confirmationmpopup();

    // Wait 15 seconds
    await page.waitForTimeout(10000);
    
    const workedit = new Workorderedit(page);
    const editdata = workedittestdata;
    await workedit.jobeditaction(
        editdata.Remark,
        //editdata.sorcode,
        //editdata.quantity,
        //editdata.location
    );
    await workedit.conformeditjob();


})
