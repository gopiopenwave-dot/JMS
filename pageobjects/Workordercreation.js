const {test,expect} = require('@playwright/test');

class Workorder{
    constructor(page){
        this.page = page;
        this.username = page.getByPlaceholder('User ID');
        this.password = page.getByPlaceholder('Password');
        this.loginbtn = page.getByRole('button', { name: 'LOGIN' });

        this.jobs = page.locator("//nav[@class='site-nav clearfix']//ul[@class='list-unstyled clearfix nav-list mb15']//li[contains(@class,'waves-effect')]//a[@href='javascript:;']//i[@class='fa fa-bar-chart-o']");
        this.managejobs = page.getByRole('link', { name: 'Manage Jobs' });
       // this.managejobs = page.locator("nav[class='site-nav clearfix'] a[title='Manage Jobs']");
        this.addjob = page.locator('#btnAddNewJD:visible');
        this.client = page.locator('#drpClientId');
        this.jobtype = page.locator('#drpJobOrderTypeId');
        this.jobno = page.getByLabel('Job Number*');
        this.operationcode = page.getByLabel('Operation Code');
        this.receiveddate = page.getByLabel('Received Date*');
        this.priority = page.locator('#drpPriorityCode');
        this.startdate = page.getByLabel('Scheduled Start Date*');
        this.enddate = page.getByLabel('Scheduled End Date*');
        this.addSOR = page.locator('#AddNew');
        this.SORcode = page.locator('#CodeMasterId');
        this.workdescription = page.getByLabel('Work Description');
        this.address = page.getByLabel('Address');
        this.postalcode = page.getByLabel('Postal Code*');
        this.contactname = page.getByLabel('Contact Name');
        this.contactnumber = page.getByLabel('Contact Number');
        this.supervisorname = page.getByLabel('Supervisor Name');
        this.supervisornumber = page.getByLabel('Supervisor Number');
        this.remarks = page.getByLabel('Remarks', { exact: true });
        this.technician = page.locator('[name="TechnicianId"]');
        this.status = page.locator('#MainStatus');
        this.savebtn = page.locator('#btnSaveJD');
        this.confirmpopup = page.getByRole('button', { name: 'Ok' });
    }


async launchurl(){
    await this.page.goto('http://113.193.25.21:340/');
}

async login(username,password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click();
}

async createworkorder(client,jobtype,jobno,operationcode,receiveddate,priority,startdate,enddate,sorcode,fullsorcode,workdescription,address,postalcode,contactname,contactnumber,supervisorname,supervisornumber,remarks,technician,status){

    // Step 2 - Wait for Jobs menu to be visible
    await expect(this.jobs).toBeVisible();
    // Step 3 - Click Jobs
    await this.jobs.click();
    // Step 4 - Click Manage Jobs submenu
    await this.managejobs.click();
    await this.addjob.click();
    await this.client.selectOption(client);
    await this.jobtype.selectOption(jobtype);
    await this.jobno.fill(jobno);
    await this.operationcode.fill(operationcode);
    await this.receiveddate.fill(receiveddate);
    await this.priority.selectOption(priority);
    await this.startdate.fill(startdate);
    await this.enddate.fill(enddate);
    await this.addSOR.click();
    await this.SORcode.fill(fullsorcode);

   // await expect(this.page.getByText(fullsorcode, { exact: true })).toBeVisible();
    await this.page.getByText(fullsorcode, { exact: true }).first().click();

    await this.workdescription.fill(workdescription);
    await this.address.fill(address);
    await this.postalcode.fill(postalcode);
    await this.contactname.fill(contactname);
    await this.contactnumber.fill(contactnumber);
    await this.supervisorname.fill(supervisorname);
    await this.supervisornumber.fill(supervisornumber);
    await this.remarks.fill(remarks);
    await this.technician.selectOption(technician);
    await this.status.selectOption(status);
    await this.savebtn.click();

}

async confirmationmpopup(){
    await expect(this.confirmpopup).toBeVisible();
    await this.confirmpopup.click();
}

}

module.exports = {Workorder};