const convertValue =  require ('./stars');

describe('convertvalue',()=>{
    it('value',()=>{
        expect(convertValue(4)).toBe(2)
    })
})