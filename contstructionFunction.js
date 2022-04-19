function TopBoy(Name, Age, Class, Workpermit, Gender, language) {
  this.name = Name;
  this.age = Age;
  this.class = Class;
  this.Workpermit = Workpermit;
  this.Gender = Gender;
  this.language = language;
  this.cleaning = function () {
    alert("Cleaning the room at the moment");
  };
}

var topBoy1 = new TopBoy("Adeleke", 12, "Graduate", "Yes", "Male", [
  "English, Arabic",
]);
