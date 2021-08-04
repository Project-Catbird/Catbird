module.exports = {

  // GET /qa/questions
  // NOTE: product_id for item MUST be provided in the query params of HTTP request, not added to end of url as with other HTTP routes
  // ex: https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/qa/questions?product_id=16056
  questions: {
    "product_id": "5",
    "results": [
      {
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      {
        "question_id": 39,
        "question_body": "Why is this product cheaper here than other sites???",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 32,
        "question_body": "Why Is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      }
      // ...
    ]
  },

  // GET /qa/questions/:question_id/answers
  answers: {
    "question": "1",
    "page": 0,
    "count": 5,
    "results": [
      {
        "answer_id": 8,
        "body": "What a great question!",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "metslover",
        "helpfulness": 8,
        "photos": [],
      },
      {
        "answer_id": 5,
        "body": "Something pretty durable but I can't be sure",
        "date": "2018-01-04T00:00:00.000Z",
        "answerer_name": "metslover",
        "helpfulness": 5,
        "photos": [{
            "id": 1,
            "url": "urlplaceholder/answer_5_photo_number_1.jpg"
          },
          {
            "id": 2,
            "url": "urlplaceholder/answer_5_photo_number_2.jpg"
          },
          // ...
        ]
      }
      // ...
    ]
  }
}