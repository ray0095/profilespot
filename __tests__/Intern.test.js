// require Intern module - which we will be testing in this suite
const Intern = require('../lib/Intern');

// describe Intern
describe('Intern', () => {
  // describe Initialization
  describe('Initialization', () => {
    // test that it returns an object that is an instance of the Intern class when called with the new keyword
      // call the constructor
      // check that it is an instance of Intern
    it('returns an object that is an instance of the Intern class when called with the new keyword', () => {
      const intern = new Intern();
      expect(intern instanceof Intern).toBe(true);
    })

    // test that it sets school property based on constructor argument
      // define a name for the test
      // call constructor with the test school
      // check that the resulting school property is equal to the test school
      it('it sets the school property based on constructor argument', () => {
        const school = "Univeristy of Mary Washington";
        const intern = new Intern("Rachel", 455, "rachel@gmail.com", school);
  
        expect(intern.school).toBe(school);
      });
  });

// describe getSchool
describe('getSchool', () => {
  // test that it returns the school property when the getSchool() method is called
    // define a school for the test
    // call constructor with the test name
    // call the getSchool() method and check that the result equals the test name
  it('returns the school property when the getSchool() method is called', () => {
    const school = "University of Mary Washington";
    const intern = new Intern("Rachel", 455, "rachel@gmail.com", school);

    expect(intern.getSchool()).toBe(school);
  });
});

  // decsribe getRole
  describe('getRole', () => {
    // test that it returns 'Intern' when the getRole() method is called
    it("returns 'Intern' when the getRole() method is called", () => {
      const intern = new Intern();

      expect(intern.getRole()).toBe('Intern');
    });
  });
});