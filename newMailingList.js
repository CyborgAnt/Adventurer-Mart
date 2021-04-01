let fileSave = () => {
    	
    // Getting data from each element
    const name = document.getElementById('name');
    const classPerson = document.getElementById('Profession');       // maybe chane element ID from 'class'?
    const mailbox = document.getElementById('selectRegion');
    const msg = document.getElementById('msg');
    
    // Storing the data in a variable
    let rawData = 
        'Name: ' + name.value + ' \r\n ' + 
        'Class: ' + classPerson.value + ' \r\n ' + 
        'Magic Mailbox Location: ' + mailbox.value + ' \r\n ' + 
        'Message: ' + msg.value;
    
    // Convert the text to BLOB object
    const textToBLOB = new Blob([rawData], { type: 'text/plain' });
    const sFileName = 'dataList.txt';	   // The file to save the data.

    let link = document.createElement("a");
    link.download = sFileName;

    if (window.webkitURL != null) {
        link.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        link.href = window.URL.createObjectURL(textToBLOB);
        link.style.display = "none";
        document.body.appendChild(link);
    }

    link.click(); 
}