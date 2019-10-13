describe('todo flow test', () => {
    it('', () => {
         cy
         .visit('/')
         .findByAltText('add item')
         .click()
         .findByPlaceholderText('Title')
         .type('test title')
         .findByPlaceholderText('Body')
         .type('test body')
         .findByAltText('add')
         .click()
    })
})