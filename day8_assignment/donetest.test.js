test('add numbers async', done => {
    addAsync(10, 5, result => {
      expect(result).toBe(15);
      done();
    })
  })