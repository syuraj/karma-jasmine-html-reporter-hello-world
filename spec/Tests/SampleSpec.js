describe("A sample test", function(){

	it("works fine", function(){
		var a = true;
		expect(a).toBe(true);
	});

	it("doesnt work fine", function(){
		var a = true;
		expect(a).toBe(false);
	});	
});