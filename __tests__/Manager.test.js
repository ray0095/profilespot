// require Manager module - which we will be testing in this suite
const Manager = require('../lib/Manager');

// describe Manager
describe('Manager', () => {
  // describe Initialization
  describe('Initialization', () => {
    // test that it returns an object that is an instance of the Manager class when called with the new keyword
      // call the constructor
      // check that it is an instance of Manager
    it('returns an object that is an instance of the Manager class when called with the new keyword', () => {
      const manager = new Manager();
      expect(manager instanceof Manager).toBe(true);
    });

    // test that it sets office number property based on constructor argument
      // define a name for the test
      // call constructor with the test office number
      // check that the resulting office number property is equal to the test office number
      it('it sets the office number property based on constructor argument', () => {
        const officeNum = "4B";
        const manager = new Manager("Rachel", 455, "rachel@gmail.com", officeNum);
  
        expect(manager.officeNum).toBe(officeNum);
      });
    });

      // decsribe getRole
  describe('getRole', () => {
    // test that it returns 'Manager' when the getRole() method is called
    it("returns 'Manager' when the getRole() method is called", () => {
      const manager = new Manager();

      expect(manager.getRole()).toBe('Manager');
    });
  });
});