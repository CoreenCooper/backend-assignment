var app = require("../../app");

const supertest = require("supertest");

const colors = require("../../data/colors.json");

describe("Color Records", () => {
  it("GET /records", async () => {
    var expected = {
      previousPage: null,
      nextPage: 2,
      ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      open: [
        { id: 2, color: "yellow", disposition: "open", isPrimary: true },
        { id: 4, color: "brown", disposition: "open", isPrimary: false },
        { id: 6, color: "blue", disposition: "open", isPrimary: true },
        { id: 8, color: "green", disposition: "open", isPrimary: false },
        { id: 10, color: "red", disposition: "open", isPrimary: true },
      ],
      closedPrimaryCount: 1,
    };

    await supertest(app)
      .get("/records")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(expected);
      });
  });

  // it("GET /records?page=1", async () => {

  //     var expected = {"previousPage":null,"nextPage":2,"ids":[1,2,3,4,5,6,7,8,9,10],"open":[{"id":2,"color":"yellow","disposition":"open","isPrimary":true},{"id":4,"color":"brown","disposition":"open","isPrimary":false},{"id":6,"color":"blue","disposition":"open","isPrimary":true},{"id":8,"color":"green","disposition":"open","isPrimary":false},{"id":10,"color":"red","disposition":"open","isPrimary":true}],"closedPrimaryCount":1};

  //     await supertest(app).get("/records?page=1")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });

<<<<<<< HEAD
    // it("GET /records?page=1", async () => {

    //     var expected = {"previousPage":null,"nextPage":2,"ids":[1,2,3,4,5,6,7,8,9,10],"open":[{"id":2,"color":"yellow","disposition":"open","isPrimary":true},{"id":4,"color":"brown","disposition":"open","isPrimary":false},{"id":6,"color":"blue","disposition":"open","isPrimary":true},{"id":8,"color":"green","disposition":"open","isPrimary":false},{"id":10,"color":"red","disposition":"open","isPrimary":true}],"closedPrimaryCount":1};

    //     await supertest(app).get("/records?page=1")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });

    // it("GET /records?page=3", async () => {

    //     var expected = {"previousPage":2,"nextPage":4,"ids":[21,22,23,24,25,26,27,28,29,30],"open":[{"id":23,"color":"red","disposition":"open","isPrimary":true},{"id":24,"color":"red","disposition":"open","isPrimary":true},{"id":25,"color":"red","disposition":"open","isPrimary":true},{"id":28,"color":"blue","disposition":"open","isPrimary":true}],"closedPrimaryCount":3};

    //     await supertest(app).get("/records?page=3")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });

    // it("GET /records?page=15&colors=red,blue,brown", async () => {

    //     var expected = {"previousPage":14,"nextPage":16,"ids":[236,237,238,240,241,243,246,251,252,256],"open":[{"id":240,"color":"blue","disposition":"open","isPrimary":true},{"id":241,"color":"red","disposition":"open","isPrimary":true},{"id":243,"color":"blue","disposition":"open","isPrimary":true},{"id":251,"color":"blue","disposition":"open","isPrimary":true},{"id":252,"color":"blue","disposition":"open","isPrimary":true},{"id":256,"color":"red","disposition":"open","isPrimary":true}],"closedPrimaryCount":4};

    //     await supertest(app).get("/records?page=15&colors=red,blue,brown")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });

    // it("GET /records?page=34", async () => {

    //     var expected = {"previousPage":33,"nextPage":35,"ids":[331,332,333,334,335,336,337,338,339,340],"open":[{"id":332,"color":"brown","disposition":"open","isPrimary":false},{"id":334,"color":"green","disposition":"open","isPrimary":false},{"id":336,"color":"blue","disposition":"open","isPrimary":true},{"id":337,"color":"green","disposition":"open","isPrimary":false},{"id":339,"color":"green","disposition":"open","isPrimary":false},{"id":340,"color":"red","disposition":"open","isPrimary":true}],"closedPrimaryCount":2};

    //     await supertest(app).get("/records?page=1")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });

    // it("GET /records?page=50", async () => {

    //     var expected = {"previousPage":49,"nextPage":null,"ids":[491,492,493,494,495,496,497,498,499,500],"open":[{"id":491,"color":"red","disposition":"open","isPrimary":true}],"closedPrimaryCount":6};

    //     await supertest(app).get("/records?page=50")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });

    // it("GET /records?page=51", async () => {

    //     var expected = {"previousPage":50,"nextPage":null,"ids":[],"open":[],"closedPrimaryCount":0};

    //     await supertest(app).get("/records?page=51")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });

    // it("GET /records?colors=brown", async () => {

    //     var expected = {"previousPage":null,"nextPage":2,"ids":[1,3,4,9,20,27,29,41,42,55],"open":[{"id":4,"color":"brown","disposition":"open","isPrimary":false},{"id":41,"color":"brown","disposition":"open","isPrimary":false},{"id":55,"color":"brown","disposition":"open","isPrimary":false}],"closedPrimaryCount":0};

    //     await supertest(app).get("/records?colors=brown")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });

    // it("GET /records?colors=hotpink", async () => {

    //     var expected = {"previousPage":null,"nextPage":null,"ids":[],"open":[],"closedPrimaryCount":0};

    //     await supertest(app).get("/records?colors=hotpink")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });

    // it("GET /records?colors=hotpink", async () => {

    //     var expected = {"previousPage":null,"nextPage":null,"ids":[],"open":[],"closedPrimaryCount":0};

    //     await supertest(app).get("/records?colors=hotpink")
    //     .expect(200)
    //     .then((response) => {
    //         expect(response.body).toEqual(expected)
    //     });

    // });


})
=======
  // it("GET /records?page=3", async () => {

  //     var expected = {"previousPage":2,"nextPage":4,"ids":[21,22,23,24,25,26,27,28,29,30],"open":[{"id":23,"color":"red","disposition":"open","isPrimary":true},{"id":24,"color":"red","disposition":"open","isPrimary":true},{"id":25,"color":"red","disposition":"open","isPrimary":true},{"id":28,"color":"blue","disposition":"open","isPrimary":true}],"closedPrimaryCount":3};

  //     await supertest(app).get("/records?page=3")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });

  // it("GET /records?page=15&colors=red,blue,brown", async () => {

  //     var expected = {"previousPage":14,"nextPage":16,"ids":[236,237,238,240,241,243,246,251,252,256],"open":[{"id":240,"color":"blue","disposition":"open","isPrimary":true},{"id":241,"color":"red","disposition":"open","isPrimary":true},{"id":243,"color":"blue","disposition":"open","isPrimary":true},{"id":251,"color":"blue","disposition":"open","isPrimary":true},{"id":252,"color":"blue","disposition":"open","isPrimary":true},{"id":256,"color":"red","disposition":"open","isPrimary":true}],"closedPrimaryCount":4};

  //     await supertest(app).get("/records?page=15&colors=red,blue,brown")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });

  // it("GET /records?page=34", async () => {

  //     var expected = {"previousPage":33,"nextPage":35,"ids":[331,332,333,334,335,336,337,338,339,340],"open":[{"id":332,"color":"brown","disposition":"open","isPrimary":false},{"id":334,"color":"green","disposition":"open","isPrimary":false},{"id":336,"color":"blue","disposition":"open","isPrimary":true},{"id":337,"color":"green","disposition":"open","isPrimary":false},{"id":339,"color":"green","disposition":"open","isPrimary":false},{"id":340,"color":"red","disposition":"open","isPrimary":true}],"closedPrimaryCount":2};

  //     await supertest(app).get("/records?page=1")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });

  // it("GET /records?page=50", async () => {

  //     var expected = {"previousPage":49,"nextPage":null,"ids":[491,492,493,494,495,496,497,498,499,500],"open":[{"id":491,"color":"red","disposition":"open","isPrimary":true}],"closedPrimaryCount":6};

  //     await supertest(app).get("/records?page=50")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });

  // it("GET /records?page=51", async () => {

  //     var expected = {"previousPage":50,"nextPage":null,"ids":[],"open":[],"closedPrimaryCount":0};

  //     await supertest(app).get("/records?page=51")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });

  // it("GET /records?colors=brown", async () => {

  //     var expected = {"previousPage":null,"nextPage":2,"ids":[1,3,4,9,20,27,29,41,42,55],"open":[{"id":4,"color":"brown","disposition":"open","isPrimary":false},{"id":41,"color":"brown","disposition":"open","isPrimary":false},{"id":55,"color":"brown","disposition":"open","isPrimary":false}],"closedPrimaryCount":0};

  //     await supertest(app).get("/records?colors=brown")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });

  // it("GET /records?colors=hotpink", async () => {

  //     var expected = {"previousPage":null,"nextPage":null,"ids":[],"open":[],"closedPrimaryCount":0};

  //     await supertest(app).get("/records?colors=hotpink")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });

  // it("GET /records?colors=hotpink", async () => {

  //     var expected = {"previousPage":null,"nextPage":null,"ids":[],"open":[],"closedPrimaryCount":0};

  //     await supertest(app).get("/records?colors=hotpink")
  //     .expect(200)
  //     .then((response) => {
  //         expect(response.body).toEqual(expected)
  //     });

  // });
});
>>>>>>> test1
