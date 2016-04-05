//Business logic

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(addressType, street, city, state, zipCode) {
  this.addressType = addressType;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state + " " + this.zipCode + "<br></br>";
}

//User interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<br></br>' +
                                 '<div class="form-group">' +
                                   '<label for="selectAddress">Address Type</label>' +
                                    '<select class="form-control" id="addressType">' +
                                      '<option>Home</option>' +
                                      '<option>Work</option>' +
                                      '<option>Other</option>' +
                                    '</select>' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street Name</label>' +
                                   '<input type="text" class="form-control" id="new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City Name</label>' +
                                   '<input type="text" class="form-control" id="new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State Name</label>' +
                                   '<input type="text" class="form-control" id="new-state">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-zipCode">Zip Code</label>' +
                                   '<input type="number" class="form-control" id="new-zipCode">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
    event.preventDefault();


    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".primary-address").each(function() {
      var inputtedAddressType = $(this).find("#addressType").val();
      var inputtedStreet = $(this).find("input#new-street").val();
      var inputtedCity = $(this).find("input#new-city").val();
      var inputtedState = $(this).find("input#new-state").val();
      var inputtedZipCode = $(this).find("input#new-zipCode").val();
      console.log(inputtedAddressType);
      var newAddress = new Address(inputtedAddressType, inputtedStreet, inputtedCity, inputtedState, inputtedZipCode);
      newContact.addresses.push(newAddress);
    });

    $(".new-address").each(function() {
      var inputtedAddressType = $(this).find("#addressType").val();
      var inputtedStreet = $(this).find("input#new-street").val();
      var inputtedCity = $(this).find("input#new-city").val();
      var inputtedState = $(this).find("input#new-state").val();
      var inputtedZipCode = $(this).find("input#new-zipCode").val();
      console.log(inputtedAddressType);
      var newAddress = new Address(inputtedAddressType, inputtedStreet, inputtedCity, inputtedState, inputtedZipCode);
      newContact.addresses.push(newAddress);
      $(".new-address").remove();
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + "<strong>" + address.addressType + "</strong>" + "</li>" + "<li>" + address.fullAddress() + "</li>");
      });
    });


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zipCode").val("");
  });
});
