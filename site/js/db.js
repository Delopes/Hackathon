var clients=[{firstNaame:"Pedro", 
            lastName:"Domingos",
            phone:"2133432",
            email:"info@codecade.com",
            userName:"pedro",
            nameOnCard:"Pedro Domingos",
            cardNum:"1231231212321365",
            exp:"05/21",
            password:"pedro"},
            {firstNaame:"Maria", 
            lastName:"Domingos",
            phone:"2135432",
            email:"info@codecadet.com",
            userName:"maria",
            nameOnCard:"Pedro Domingos",
            cardNum:"12323431212321365",
            exp:"06/21",
            password:"maria"}]


function addToData(){
    var client={firstNaame:$('#firstName').val(),
                lastName:$('#lastName').val(),
                phone:$('#phone').val(),
                email:$('#email').val(),
                userName:$('#login').val(),
                nameOnCard:$('#cname').val(),
                cardNum:$('#ccnum').val(),
                exp:$('#expmonth').val(),
                password:$('#password').val()}

    console.log(client);
    clients.push(client)
    console.log("client has been added");

    writeFile(client);
    
}