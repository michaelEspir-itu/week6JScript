var expect = chai.expect;

describe('Card', function(){
    describe('constructor',function(){
    it ('should create a new card with a name,rank,and value',function(){
        let i = new Card ('♦️',4,4);
        expect(i.rank).to.equal(4);
    });

    });
});

describe ('Gamer',function(){
    describe('constructor',function(){
        it ('should create a gamers profile that is a string',function(){
            let k = new Gamer ('Rebekah');
            expect(k.gamersName).to.be.a('string');
            
        });
    });

});

describe('TheWarGame',function(){
   describe('startgame',function(){
       it ('should create 2 gamers',function(){
        let newchallenge = new TheWarGame;
        newchallenge.startgame('Rebekah','Josiah');
        expect(newchallenge.gamers).to.have.lengthOf(2);
       });
       it('should throw an error if gamer name is not a string',function(){
           expect(function(){
               let newchallenge2 = new TheWarGame;
               newchallenge2.startgame(Summer,Miko);
           }).to.throw(Error);
       });
       
});
});