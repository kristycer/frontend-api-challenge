describe("peep", function(){
    it('has a message', function(){
        let peep = new Peep('Text')
        expect(peep.text).toEqual('Text')
    })
})