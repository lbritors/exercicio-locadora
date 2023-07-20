import { Rental } from "@prisma/client";
import rentalsRepository from "repositories/rentals-repository";
import rentalsService from "services/rentals-service";

describe("Tests", () => {
  it("should work", () => {
    expect(true).toBe(true);
  })
})
beforeEach(() => {
  jest.clearAllMocks();
})

describe("get rentals", () => {
  it("should get all rentals", async () => {
    const rental = {
      userId: 1,
      moviesId: [1],
    }
    
    jest.spyOn(rentalsRepository, "getRentals").mockImplementationOnce((): any => {
      return {
        id: 1,
        date: new Date(),
        endDate: null,
        userId: rental.userId,
        movies: [
          {
            id: rental.moviesId[0],
            name: 'Titanic',
            adultsOnly: false,
          }
        ],
        closed: false,
      };
    })
    
    const response = await rentalsService.getRentals();
    expect(rentalsRepository.getRentals).toBeCalled();
  });

  
})