// describe('index.js', function() {
//     describe('distanceFromHqInBlocks()', function() {
//       it('returns a distance in blocks', function() {
//         expect(distanceFromHqInBlocks(43)).to.equal(1);
//       });
      
function distanceFromHqInBlocks(location) {
    const hq = 42;
    let blocks; 
    if (location < hq) {
        return blocks = (hq - location);
    } else {
      return (location - hq)
    }
    }
    distanceFromHqInBlocks(43);

    // describe('distanceFromHqInFeet()', function() {
    //     it('returns a distance in feet', function() {
    //       expect(distanceFromHqInFeet(43)).to.equal(264);
    //     });
    
    //     it('returns a distance in feet', function() {
    //       expect(distanceFromHqInFeet(50)).to.equal(2112);
    //     });
    
    //     it('calculates distances below 42nd street', function() {
    //       expect(distanceFromHqInFeet(34)).to.equal(2112);
    //     });
    //   });

    function distanceFromHqInFeet(location) {
        const hq = 42;
        let feet; 
        if (location < hq) {
            return feet = ((hq - location) * 264);
        } else {
          return ((location - hq)* 264)
        }
        }

        // describe('distanceTravelledInFeet()', function() {
        //     it('returns the distance travelled in feet', function() {
        //       expect(distanceTravelledInFeet(43, 48)).to.equal(1320);
        //     });
        
        //     it('returns a distance in feet', function() {
        //       expect(distanceTravelledInFeet(50, 60)).to.equal(2640);
        //     });
        
        //     it('returns distance when destination is below distance', function() {
        //       expect(distanceTravelledInFeet(34, 28)).to.equal(1584);
        //     });
        //   });

        function distanceTravelledInFeet(a, b) {
            let travel;
            if (b > a) {
            return travel = ((b - a) * 264)

            } else {
            travel = ((a - b) * 264);
            return travel;
            }
        }
        
        
        // describe('calculatesFarePrice(start, destination)', function() {
        //     it('gives customers a free sample', function() {
        //       expect(calculatesFarePrice(43, 44)).to.equal(0);
        //     });
        
        //     it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
        //       // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
        //       expect(calculatesFarePrice(34, 32)).to.equal(2.56);
        //     });
        
        //     it('charges 25 dollars for a distance over 2000 feet', function() {
        //       expect(calculatesFarePrice(50, 58)).to.equal(25);
        //     });
        
        //     it('does not allow rides over 2500 feet', function() {
        //       expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
        //     });
        //   });
        // });


        function calculatesFarePrice(start, destination) {

            let blocksInFt = Math.abs(start - destination);
            
            if (blocksInFt * 264 < 400) {
            return 0;
            } else if (blocksInFt * 264 > 400 && blocksInFt * 264 <= 2000) {
              return ((blocksInFt * 264) - 400) * 0.02 ;
            } else if ((blocksInFt * 264) > 2000 && (blocksInFt * 264) <= 2500) {
              return 25;
            } else if ((blocksInFt * 264) > 2500) {
              return 'cannot travel that far';
            }
            }
           
