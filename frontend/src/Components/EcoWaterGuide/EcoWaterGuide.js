import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';

function EcoWaterGuide() {
  const [tip, setTip] = useState('Collect rainwater for watering plants.');
  const [currentFact, setCurrentFact] = useState('Less than 1% of the water on Earth is accessible for human use.');
  const { totalWaterUsage, totalGoal, totalWaterUsageByCategory, goals } = useGlobalContext();
  const [statusMessage, setStatusMessage] = useState('');

  const tips = [
    "Turn off the tap while brushing your teeth.",
    "Fix leaking faucets and pipes to prevent water wastage.",
    "Use a broom instead of a hose to clean driveways and sidewalks.",
    "Collect rainwater for watering plants and gardens.",
    "Install water-efficient showerheads to reduce water flow.",
    "Use a dishwasher or washing machine only with full loads to save water.",
    "Take shorter showers to conserve water.",
    "Water your plants during early morning or late evening to reduce evaporation.",
    "Switch to a low-flow toilet to minimize water usage.",
    "Cover swimming pools when not in use to reduce evaporation.",
    "Choose drought-tolerant plants that need less water.",
    "Install a water-efficient irrigation system for gardens and lawns.",
    "Reuse water from washing fruits and vegetables to water plants.",
    "Use a bucket instead of a hose to wash your car.",
    "Install a rain barrel to collect rainwater for outdoor use.",
    "Use a faucet aerator to reduce water flow without compromising pressure.",
    "Avoid using a hose to clean your driveway—use a broom instead.",
    "Only run the washing machine or dishwasher with full loads to save water and energy.",
    "Ensure there are no cracks in your pipes to avoid water leakage.",
    "Switch to energy-efficient appliances that use less water."
  ];

  const waterFacts = [
    "Less than 1% of the Earth's water is available for human use, making it a precious resource we must conserve.",
    "By 2025, two-thirds of the world's population may face water shortages if we don't take action to conserve water.",
    "More than 1 billion people around the world don't have access to safe drinking water, highlighting the need for better water management.",
    "Agriculture consumes around 70% of the world’s freshwater, making it essential to use water wisely for food production.",
    "In many regions, droughts are becoming more frequent and severe, which threatens access to clean water.",
    "Freshwater ecosystems are rapidly disappearing, and water conservation helps preserve these vital environments.",
    "The energy required to pump, treat, and distribute water is significant, so conserving water also reduces energy consumption.",
    "Water scarcity affects 40% of the global population, which can lead to food insecurity and economic challenges.",
    "A growing global population means greater demand for water, making it crucial to reduce water waste.",
    "Climate change is altering precipitation patterns, leading to droughts and floods, making water conservation more urgent.",
    "Wasting water leads to higher water bills, putting unnecessary strain on personal finances and public resources.",
    "In the U.S., about 1 in 10 people live in areas with chronic water shortages, a trend that could worsen without water-saving practices.",
    "It takes about 1,800 gallons of water to produce just one pound of beef, illustrating the need to use water sustainably in food production.",
    "Over-extraction of groundwater can cause water tables to drop, making it harder to access water for drinking and irrigation.",
    "With more than 2 billion people worldwide living in areas with insufficient sanitation, conserving water helps improve public health.",
    "Without water conservation, natural water sources like rivers and lakes can dry up, affecting wildlife and ecosystems.",
    "Reducing water use can help protect vital water reserves for future generations and ensure a sustainable water supply.",
    "Water scarcity is already a major issue in many regions, and continued overuse will exacerbate the problem for future generations.",
    "The need for water will continue to rise as populations grow, so it’s essential to conserve water now to ensure its availability in the future.",
    "Increased water conservation practices in urban areas can alleviate pressure on water treatment facilities and improve efficiency."
  ];

  const generateTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setTip(tips[randomIndex]);
  };

  const generateRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * waterFacts.length);
    setCurrentFact(waterFacts[randomIndex]);
  };

  const checkWaterUsageGoal = () => {
    const usage = totalWaterUsage();
    const goal = totalGoal();

    if (usage <= goal) {
      setStatusMessage(`Nice! You met your goal !!`);
    } else {
      const exceeded = (usage - goal).toFixed(1);
      setStatusMessage(`You've exceeded your water usage goal by ${exceeded} gallons.`);
    }
  };

  const categoryUsage = totalWaterUsageByCategory();

  const categoryUsageWithGoal = Object.entries(categoryUsage).map(([category, usage]) => {
    const goal = goals.find(goal => goal.category.toLowerCase() === category.toLowerCase());
    const goalAmount = goal ? goal.amount : 'No goal set';
    return {
      category,
      usage,
      goalAmount
    };
  });

  const formatCategoryName = (category) => {
    return category
      .split('_') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '); 
  };

  return (
    <EcoWaterGuideStyled>
      <h1>Water Guide</h1>
      <div className="content-container">
        <div className="two-column-container">
          <div className="left-column">
            <h2>Your Water Usage</h2>
            <p className="total-water-used">total water used:</p>
            <div className="amount-container">
              <p className="usage-amount">{totalWaterUsage()} gallons</p>
            </div>
            <p>Goal: {totalGoal()} gallons</p>
            <button onClick={checkWaterUsageGoal}>Check Usage Goal</button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </div>

          <div className="right-column">
            <h2>Water Usage Breakdown</h2>
            {categoryUsageWithGoal.map(({ category, usage, goalAmount }) => (
              <div key={category} className="category-item">
                <p><strong>{formatCategoryName(category)}:</strong></p>
                <div className="amount-container">
                  <p className="category-amount">{usage} gallons</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tips-facts-container">
          <div className="white-container">
            <h2>Water Saving Tips</h2>
            <div className="fact-container">
              <p>{tip}</p>
            </div>
            <button onClick={generateTip}>Show Another Tip</button>
          </div>

          <div className="white-container">
            <h2>Did You Know?</h2>
            <div className="fact-container">
              <p>{currentFact}</p>
            </div>
            <button onClick={generateRandomFact}>Show Another Fact</button>
          </div>
        </div>
      </div>
    </EcoWaterGuideStyled>
  );
}

const EcoWaterGuideStyled = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: left;
  height: 100vh;
  padding: 2rem;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    margin-top: 3rem;
  }

  .two-column-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 3rem;
  }

  .left-column,
  .right-column {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 2rem;
    text-align: left;
    flex: 1;
  }

  .left-column h2,
  .right-column h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .left-column button {
    margin-top: 1rem;
  }

  .usage-amount {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 1.5rem 0;
  }

  .amount-container {
    background: #FFFFFF;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem 0;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    color: #007BFF
  }

  .category-item {
    margin-bottom: 1.5rem;
  }

  .category-amount {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    color: #007BFF;
  }

  button {
    padding: 15px 30px;
    font-size: 18px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  .status-message {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    color: green;
  }

  .white-container {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.06);
    border-radius: 15px;
    padding: 2.5rem;
    text-align: center;
    max-width: 500px;
    width: 100%;
    flex: 1;
    min-width: 300px;
  }

  .fact-container {
    background: #FFFFFF;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .fact-container p {
    font-size: 1.4rem;
    color: #333;
    text-align: center;
  }

  .tips-facts-container {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .total-water-used {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export default EcoWaterGuide;
