describe('Catbird', () => {

  jest.mock('../client/src/Index.jsx')
  document.body.innerHTML = `<div id="app"></div>`;
  require('../client/src/Index.jsx')


  it('should render only two reviews on the page on init', () => {
    expect(document.getElementById('review-feed').children.length).toBe(2)
  })
  // it('should render two more reviews on the page on more review button click', () => {
  //   const btn = document.getElementById("#more-reviews")
  //   btn.simulate("click")

  //   expect(document.getElementById('reviews-list').children.length).toBe(4)
  // })
})