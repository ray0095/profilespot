// require Engineer module - which we will be testing in this suite
const Engineer = require('../lib/Engineer');

// describe Engineer
describe('Engineer', () => {
  // describe Initialization
  describe('Initialization', () => {
    // test that it returns an object that is an instance of the Engineer class when called with the new keyword
      // call the constructor
      // check that it is an instance of Engineer
    it('returns an object that is an instance of the Manager class when called with the new keyword', () => {
      const engineer = new Engineer();
      expect(engineer instanceof Engineer).toBe(true);
    })

    // test that it sets github property based on constructor argument
      // define a name for the test
      // call constructor with the test github
      // check that the resulting git hub property is equal to the test git hub
      it('it sets the github property based on constructor argument', () => {
        const gitHub = "ray0095";
        const engineer = new Engineer("Rachel", 455, "rachel@gmail.com", gitHub);
  
        expect(engineer.gitHub).toBe(gitHub);
      });
  });

  // describe getgitHub
  describe('getgitHub', () => {
    // test that it returns the gitHub property when the getgitHub() method is called
      // define a name for the test
      // call constructor with the test name
      // call the getgitHub() method and check that the result equals the test name
    it('returns the name property when the getgitHub() method is called', () => {
      const github = "ray0095";
      const engineer = new Engineer("Rachel", 455, "rachel@gmail.com", github);

      expect(engineer.getgitHub()).toBe(github);
    });
  });

  // decsribe getRole
  describe('getRole', () => {
    // test that it returns 'Engineer' when the getRole() method is called
    it("returns 'Engineer' when the getRole() method is called", () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toBe('Engineer');
    });
  });
});