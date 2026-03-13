// Dynamic date generation
const today = new Date();
const startdate = new Date(today.getTime() + 60 * 60 * 1000);
const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

// Date formatter DD/MM/YYYY HH:MM
const formatdate = (date) => {
    return `${String(date.getDate()).padStart(2,'0')}/${String(date.getMonth()+1).padStart(2,'0')}/${date.getFullYear()} ${String(date.getHours()).padStart(2,'0')}:${String(date.getMinutes()).padStart(2,'0')}`;
};

// Unique job number generator
const generatejobno = () => {
    const d = new Date();
    return `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}-${String(d.getHours()).padStart(2,'0')}${String(d.getMinutes()).padStart(2,'0')}${String(d.getSeconds()).padStart(2,'0')}`;
};

const workorderTestData = {
        username:           "Admin",
        password:           "Electrospark1",
        client:             "Broadspectrum",
        jobtype:            "Normal",
        jobno:              generatejobno(),           // ✅ unique every run
        operationcode:      generatejobno(),           // ✅ same logic as jobno
        receiveddate:       formatdate(today),         // ✅ current date & time
        priority:           "24 Days",
        startdate:          formatdate(startdate),     // ✅ current + 1 hour
        enddate:            formatdate(tomorrow),      // ✅ tomorrow same time
        sorcode:            "H",
        fullsorcode:        "LAHC460255787",
        workdescription:    "Routine maintenance check",
        address:            "123 Main Street",
        postalcode:         "2021",
        contactname:        "John Doe",
        contactnumber:      "9876543210",
        supervisorname:     "Robert Smith",
        supervisornumber:   "8765432109",
        remarks:            "Please complete before EOD",
        technician:         "OWC User AS",
        status:             "Assigned"
    

};

module.exports = { workorderTestData };