import { useEffect, useState } from "react";

export default function CarLoadingPage() {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setCars([
        { id: 1, model: "Toyota Camry", price: 12000 },
        { id: 2, model: "Honda Civic", price: 9000 },
        { id: 3, model: "Nissan Altima", price: 15000 },
        { id: 4, model: "Ford Focus", price: 7000 },
        { id: 5, model: "Hyundai Elantra", price: 11000 },
        { id: 6, model: "Mazda 3", price: 13000 },
        { id: 7, model: "Kia Optima", price: 14000 },
        { id: 8, model: "Volkswagen Jetta", price: 16000 },
        { id: 9, model: "Subaru Impreza", price: 18000 },
        { id: 10, model: "Chevy Malibu", price: 20000 },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <section className="car-page">
      {loading ? (
        <div className="loading-wrapper">
          <div className="loading-bar">
            <div className="loading-fill" />
          </div>
          <p className="loading-text">Searching cars $5,000 – $25,000...</p>
        </div>
      ) : (
        <div className="car-grid">
          {cars.map((car) => (
            <div key={car.id} className="car-card">
              <h3>{car.model}</h3>
              <p className="price">${car.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

import { useEffect, useState } from "react";

export default function CarLoadingPage() {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      const carData = [
        { id: 1, model: "Toyota Camry", price: 12000 },
        { id: 2, model: "Honda Civic", price: 9000 },
        { id: 3, model: "Nissan Altima", price: 15000 },
        { id: 4, model: "Ford Focus", price: 7000 },
        { id: 5, model: "Hyundai Elantra", price: 11000 },
        { id: 6, model: "Mazda 3", price: 13000 },
        { id: 7, model: "Kia Optima", price: 14000 },
        { id: 8, model: "Volkswagen Jetta", price: 16000 },
        { id: 9, model: "Subaru Impreza", price: 18000 },
        { id: 10, model: "Chevy Malibu", price: 20000 },
      ];

      setCars(carData);
      setFilteredCars(carData);
      setLoading(false);
    }, 2000);
  }, []);

  const handleFilter = (value) => {
    setPriceFilter(value);

    if (value === "all") {
      setFilteredCars(cars);
      return;
    }

    const [min, max] = value.split("-").map(Number);

    const filtered = cars.filter(
      (car) => car.price >= min && car.price <= max
    );

    setFilteredCars(filtered);
  };

  return (
    <section className="car-page">
      <h2 className="car-title">Car Prices ($5k–$25k)</h2>

      {/* Dropdown Filter */}
      <div className="filter-wrapper">
        <select
          value={priceFilter}
          onChange={(e) => handleFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="all">All Prices</option>
          <option value="5000-10000">$5,000 – $10,000</option>
          <option value="10000-15000">$10,000 – $15,000</option>
          <option value="15000-20000">$15,000 – $20,000</option>
          <option value="20000-25000">$20,000 – $25,000</option>
        </select>
      </div>

      {loading ? (
        <div className="loading-wrapper">
          <div className="loading-bar">
            <div className="loading-fill" />
          </div>
          <p className="loading-text">Searching cars...</p>
        </div>
      ) : (
        <div className="car-grid">
          {filteredCars.map((car) => (
            <div key={car.id} className="car-card">
              <h3>{car.model}</h3>
              <p className="price">${car.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

