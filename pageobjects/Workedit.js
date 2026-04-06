  const {test,expect} = require('@playwright/test');

class Workorderedit{
    constructor(page){
        this.page = page;
        this.dashboard = page.locator('i.fa.fa-tachometer:visible').nth(1);
        this.jobs = page.locator("//nav[@class='site-nav clearfix']//ul[@class='list-unstyled clearfix nav-list mb15']//li[contains(@class,'waves-effect')]//a[@href='javascript:;']//i[@class='fa fa-bar-chart-o']");
        this.managejobs = page.getByRole('link', { name: 'Manage Jobs' }); 
        this.jobedit = page.locator("tbody tr:nth-child(1) td:nth-child(10) a:nth-child(1) i:nth-child(1)");
        this.job = page.getByLabel('20260316-184215', { exact: true });
        this.remark = page.locator('#Remarks:visible');
        this.jobcodestab = page.getByRole('tab', { name: 'Job Codes' });
        this.jobscodeadd = page.locator('#btnAddNewJC');
        this.newsorcode = page.getByLabel('RICS-WICS-SOR Code*');
        this.sorquantity = page.getByLabel('Quantity*');
        this.sorlocation = page.getByLabel('Location*');
        this.sorsave = page.locator('#btnSaveJC');
        this.sorconform = page.getByRole('button', { name: 'Ok' });
        this.closesor = page.locator('span.ui-button-icon.ui-icon.ui-icon-closethick:visible');
        this.maintab = page.getByRole('tab', { name: 'Main' });
        this.updatejob = page.locator('#btnSaveJD');
        this.conformjob = page.locator('button').filter({ hasText: 'Ok' }).first();
    }

async jobeditaction(Remark,sorcode,quantity,location){
    await this.dashboard.click();
    await this.page.waitForLoadState();
    await expect(this.jobs).toBeVisible();
    await this.jobs.click();
    await expect(this.managejobs).toBeVisible();
    await this.managejobs.click();
    await this.jobedit.click();
    await this.remark.fill(Remark);
    //await this.jobcodestab.click();
    //await this.jobscodeadd.click();
    //await this.newsorcode.fill(sorcode);
    //await this.page.getByText(sorcode, { exact: true }).first().click();
    
    //await this.sorquantity.fill(quantity);
    //await this.sorlocation.fill(location);
    //await this.sorsave.click();
    //await this.sorconform.click();
    //await this.maintab.click();
    await this.updatejob.click();
    

}

async conformeditjob (){
    await this.conformjob.click();
}

}
 
module.exports = {Workorderedit};