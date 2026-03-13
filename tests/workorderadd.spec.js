const {test,expect} = require('@playwright/test');
const {Workorder} = require('../pageobjects/Workordercreation');
const {workorderTestData} = require('../testdate/WorkorderTestdate');

test ('Create Workorder', async ({page}) => {
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




})