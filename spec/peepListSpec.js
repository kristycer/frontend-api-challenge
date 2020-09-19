describe('peepList', function(){

    let list = new PeepList()

    beforeEach(function(done){
        let fetchMethodSave = window.fetch;
        window.fetch = function(){
            let data = [ 
                {
                    "id":1,
                    "body":"Congrats for successfully requesting the peeps from the Chitter API! This is the first peep :)",
                    "created_at":"2020-03-06T17:16:22.601Z",
                    "updated_at":"2020-03-06T17:16:22.601Z",
                    "user": {
                        "id":1,
                        "handle":"edward"
                    },
                    "likes":[{
                        "user": {
                            "id":40,
                            "handle":"maria"
                        }
                }]
        }

    ]
    var init = { "status" : 200, "statusText" : "OK" };
           var blob = new Blob([JSON.stringify(data)], {type : 'application/json'});
           var response = new Response(blob, init)
           return Promise.resolve(response)
         }
         var peepDouble = function(body) {
           console.log(`1 Log the body = ${body}`);
           this.body = body
         }

         list.getPeeps(peepDouble, function() {
           done()
         })

    })

    it("gets the peeps from the API", function() {

      expect(list.list[0].body).toEqual("Congrats for successfully requesting the peeps from the Chitter API! This is the first peep :)")


 })});