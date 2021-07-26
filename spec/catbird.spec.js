describe('ratings-reviews', () => {

  jest.mock('../client/src/Index.jsx')


  it('should render only two reviews on the page on init', () => {
    document.body.innerHTML = `<div id="app"></div>`;
    require('../client/src/Index.jsx')
    expect(document.getElementById('reviews-list').children.length).toBe(2)
  })
})