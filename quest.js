let naviAdresses;

function nextStep(lat, lng){
console.log('nextStep', lat);
console.log('nextStep', lng);
    nameQuest = document.getElementById('nameQuest').value;
    descriptionOfStep = document.getElementById('description_of_step').value;

    getToken(email,password).then((token)=>{
        createNaviaddress(token, lat, lng);
    });


   // post();





}

function create(){
    console.log('nextStep', lat);
    console.log('nextStep', lng);
    step++
    nameQuest = document.getElementById('nameQuest').value;
    descriptionOfStep = document.getElementById('description_of_step').value;

    PopUpShow();

    /*let urlJSON = 'http://10.55.131.149:3000/';
    let params = '{\n' +
        '    "id": 1,\n' +
        '    "address": "https://rinkeby.etherscan.io/address/0xae8af0c25c45c2ff5d077b86c8f6cb39fffbabda",\n' +
        '    "price": "4.3",\n' +
        '    "lat": ' + firstlat +',\n' +
        '    "long": ' + firstlng + ',\n' +
        '    "description": '+ totalDescription +'"fewf"\n' +
        '  }';
    fetch(urlJSON,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(params)
        })
        .then((res1) => {
            res1.json().then((res2) => resolve(res2.token));
        });*/

    let createPanel = document.getElementById('create_contract');

    createPanel.disable = 'false';
}

function post() {
    console.log('post')
    let urlJSON = 'http://192.168.43.227:3000/contract';
    let params = '{' +
        '"id": "6",' +
        '"address": "https://rinkeby.etherscan.io/address/'+'dfvdfbd'+'",' +
        '"price": "4.3",' +
        '"lat": ' + '"55"' +',' +
        '"long": ' + '"44"' + ',' +
        '"description": '+ '"sgsdfv' +'fewf"' +
        '}';
    console.log(params)
    fetch(urlJSON,
        {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: params
        })
        .then((res1) => {
            console.log('res1.token', res1);
            res1.text().then((res2) => {
                resolve(res2);
                console.log('res2.token', res2);
            });
        });
}