import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const GiftRecipientForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipientInfo = useSelector((state) => state.recipientInfo);
  const giftPreferences = useSelector((state) => state.giftPreferences);

  const [step, setStep] = useState(1);
  const [generatingGiftIdeas, setGeneratingGiftIdeas] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_RECIPIENT_INFO",
      payload: { [name]: value },
    });
  };

  const handleGiftPreferencesChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_GIFT_PREFERENCES",
      payload: { [name]: value },
    });
  };

  const handleContinue = () => {
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // loading message
    setGeneratingGiftIdeas(true);
    setTimeout(() => {
      setGeneratingGiftIdeas(false);
      navigate("/gift-lists");
    }, 5000);
  };

  return (
    <>
      <div>
        {generatingGiftIdeas ? (
          <div className="loading_content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
            >
              <g clip-path="url(#clip0_0_1341)">
                <path
                  d="M69.9825 52.0731C68.4723 52.0731 67.2481 50.8495 67.2481 49.3396V49.3379C67.2481 47.828 68.4723 46.6036 69.9825 46.6036C71.4927 46.6036 72.7169 47.828 72.7169 49.3379C72.7166 50.8481 71.4924 52.0731 69.9825 52.0731Z"
                  fill="#013B58"
                />
                <path
                  d="M51.5621 82.1962C50.5687 82.1962 49.6103 81.6532 49.1263 80.7082C46.9164 76.3953 46.0958 71.3659 46.8158 66.5474C47.5603 61.5635 49.8435 57.0397 53.4185 53.4648C54.9076 51.9754 56.5802 50.6962 58.3896 49.6629C59.701 48.9142 61.3711 49.3701 62.1201 50.6815C62.869 51.9929 62.4132 53.6628 61.1018 54.412C59.7149 55.2038 58.4309 56.1863 57.2854 57.332C54.5448 60.0727 52.7945 63.5388 52.2244 67.3557C51.6718 71.0534 52.3001 74.9102 53.9932 78.215C54.682 79.5589 54.1505 81.2067 52.8065 81.8952C52.4078 82.0994 51.9818 82.1962 51.5621 82.1962Z"
                  fill="#013B58"
                />
                <path
                  d="M70.0178 93.3961C68.5076 93.3961 67.2834 92.1716 67.2834 90.6617C67.2834 89.1518 68.5076 87.9265 70.0178 87.9265C71.528 87.9265 72.7521 89.1501 72.7521 90.66V90.6617C72.7521 92.1716 71.5277 93.3961 70.0178 93.3961Z"
                  fill="#013B58"
                />
                <path
                  d="M80.6441 90.47C79.7155 90.47 78.8099 89.997 78.2972 89.1427C77.5198 87.848 77.9392 86.1683 79.2342 85.3909C80.4915 84.6359 81.6624 83.7199 82.7143 82.6677C85.4552 79.9271 87.2052 76.461 87.7753 72.6441C88.328 68.9461 87.6999 65.0898 86.0065 61.7853C85.3177 60.4414 85.849 58.7936 87.1932 58.1049C88.5374 57.4152 90.1849 57.9474 90.8737 59.2913C93.0836 63.6042 93.9042 68.6336 93.1842 73.4521C92.4396 78.4363 90.1564 82.96 86.5815 86.5347C85.214 87.9024 83.6891 89.0949 82.049 90.0795C81.6085 90.3439 81.1232 90.47 80.6441 90.47Z"
                  fill="#013B58"
                />
                <path
                  d="M70 35.2713C64.3374 35.2713 59.7469 30.6808 59.7469 25.0182V12.9875C59.7469 7.32484 64.3374 2.73438 70 2.73438C75.6626 2.73438 80.2531 7.32484 80.2531 12.9875V25.0179C80.2531 30.6805 75.6626 35.2713 70 35.2713Z"
                  fill="#0D5577"
                />
                <path
                  d="M70 38.0056C62.8387 38.0056 57.0123 32.1792 57.0123 25.0179V12.9875C57.0123 5.82613 62.8387 0 70 0C77.1613 0 82.9878 5.82613 82.9878 12.9875V25.0179C82.9878 32.1795 77.1613 38.0056 70 38.0056ZM70 5.46875C65.8541 5.46875 62.481 8.8416 62.481 12.9875V25.0179C62.481 29.1638 65.8541 32.5369 70 32.5369C74.1459 32.5369 77.519 29.1638 77.519 25.0179V12.9875C77.519 8.8416 74.1459 5.46875 70 5.46875Z"
                  fill="#013B58"
                />
                <path
                  d="M70 137.266C64.3374 137.266 59.7469 132.675 59.7469 127.013V114.982C59.7469 109.32 64.3374 104.729 70 104.729C75.6626 104.729 80.2531 109.32 80.2531 114.982V127.013C80.2531 132.675 75.6626 137.266 70 137.266Z"
                  fill="#57CFE2"
                />
                <path
                  d="M70 140C62.8387 140 57.0123 134.174 57.0123 127.012V114.982C57.0123 107.821 62.8384 101.995 70 101.995C77.1616 101.995 82.9878 107.821 82.9878 114.982V127.012C82.9878 134.174 77.1613 140 70 140ZM70 107.463C65.8541 107.463 62.481 110.836 62.481 114.982V127.012C62.481 131.158 65.8541 134.531 70 134.531C74.1459 134.531 77.519 131.158 77.519 127.012V114.982C77.519 110.836 74.1459 107.463 70 107.463Z"
                  fill="#013B58"
                />
                <path
                  d="M104.729 70.0001C104.729 64.3375 109.319 59.747 114.982 59.747H127.012C132.675 59.7467 137.266 64.3372 137.266 70.0001C137.266 75.6627 132.675 80.2532 127.013 80.2532H114.982C109.319 80.2532 104.729 75.6627 104.729 70.0001Z"
                  fill="#1497B4"
                />
                <path
                  d="M127.012 82.9875H114.982C107.821 82.9875 101.994 77.1614 101.994 70.0001C101.994 62.8387 107.82 57.0123 114.982 57.0123H127.012C134.174 57.0123 140 62.8387 140 70.0001C140 77.1614 134.174 82.9875 127.012 82.9875ZM114.982 62.4811C110.836 62.4811 107.463 65.8542 107.463 70.0001C107.463 74.1459 110.836 77.5188 114.982 77.5188H127.012C131.158 77.5188 134.531 74.1459 134.531 70.0001C134.531 65.8542 131.158 62.4811 127.012 62.4811H114.982Z"
                  fill="#013B58"
                />
                <path
                  d="M2.73438 70.0001C2.73438 64.3375 7.32484 59.747 12.9875 59.747H25.0179C30.6805 59.747 35.271 64.3375 35.271 70.0001C35.271 75.6627 30.6805 80.2532 25.0179 80.2532H12.9875C7.32484 80.2532 2.73438 75.6627 2.73438 70.0001Z"
                  fill="#CEEFF4"
                />
                <path
                  d="M25.0182 82.9875H12.9877C5.82613 82.9875 0 77.1614 0 70.0001C0 62.8387 5.82613 57.0123 12.9877 57.0123H25.0182C32.1795 57.0123 38.0059 62.8387 38.0059 70.0001C38.0059 77.1614 32.1795 82.9875 25.0182 82.9875ZM12.9877 62.4811C8.8416 62.4811 5.46875 65.8542 5.46875 70.0001C5.46875 74.1459 8.8416 77.5188 12.9877 77.5188H25.0182C29.164 77.5188 32.5371 74.1459 32.5371 70.0001C32.5371 65.8542 29.164 62.4811 25.0182 62.4811H12.9877Z"
                  fill="#013B58"
                />
                <path
                  d="M94.5569 45.443C90.5527 41.4388 90.5527 34.9468 94.5569 30.9429L103.064 22.436C107.068 18.4317 113.56 18.4317 117.564 22.436C121.568 26.4402 121.568 32.9321 117.564 36.9361L109.057 45.443C105.053 49.4472 98.5611 49.4472 94.5569 45.443Z"
                  fill="#0F7B9B"
                />
                <path
                  d="M101.807 51.1745C98.4806 51.1745 95.1556 49.9088 92.6233 47.3765C87.5596 42.3124 87.5596 34.0732 92.6233 29.0091L101.13 20.5025C103.583 18.0495 106.845 16.6984 110.314 16.6984C113.783 16.6984 117.044 18.0495 119.497 20.5025C124.561 25.5666 124.561 33.8058 119.497 38.8698L110.99 47.3765C108.459 49.908 105.132 51.1745 101.807 51.1745ZM110.314 22.1672C108.306 22.1672 106.417 22.9492 104.997 24.3697L96.4906 32.8764C93.559 35.8079 93.559 40.578 96.4906 43.5095C99.4221 46.441 104.192 46.441 107.124 43.5095L115.631 35.0029C118.562 32.0714 118.562 27.3012 115.631 24.3697C114.21 22.9495 112.322 22.1672 110.314 22.1672Z"
                  fill="#013B58"
                />
                <path
                  d="M22.4361 117.564C18.4319 113.559 18.4319 107.068 22.4361 103.064L30.9431 94.5567C34.9473 90.5524 41.4392 90.5524 45.4432 94.5567C49.4474 98.5609 49.4474 105.053 45.4432 109.057L36.9363 117.564C32.9323 121.568 26.4401 121.568 22.4361 117.564Z"
                  fill="#89DDEB"
                />
                <path
                  d="M29.6861 123.295C26.3603 123.295 23.0345 122.029 20.5024 119.497C15.4386 114.433 15.4386 106.194 20.5024 101.13L29.0093 92.6229C34.0734 87.5588 42.3126 87.5588 47.3767 92.6229C52.4405 97.6869 52.4405 105.926 47.3767 110.99L38.8698 119.497C36.338 122.029 33.0119 123.295 29.6861 123.295ZM38.193 94.2914C36.2675 94.2914 34.3422 95.0245 32.8766 96.4901L24.3697 104.997C21.4379 107.929 21.4379 112.699 24.3697 115.63C27.3012 118.562 32.0713 118.562 35.0028 115.63L43.5097 107.123C46.4415 104.192 46.4415 99.4216 43.5097 96.4901C42.0438 95.0245 40.1186 94.2914 38.193 94.2914Z"
                  fill="#013B58"
                />
                <path
                  d="M94.5569 94.5567C98.5611 90.5525 105.053 90.5525 109.057 94.5567L117.564 103.064C121.568 107.068 121.568 113.56 117.564 117.564C113.56 121.568 107.068 121.568 103.064 117.564L94.5569 109.057C90.5527 105.053 90.5527 98.5609 94.5569 94.5567Z"
                  fill="#50BCD9"
                />
                <path
                  d="M110.314 123.295C106.988 123.295 103.662 122.029 101.13 119.497L92.6233 110.99C87.5596 105.926 87.5596 97.6869 92.6233 92.6229C97.6874 87.5588 105.927 87.5588 110.991 92.6229L119.498 101.13C124.561 106.194 124.561 114.433 119.498 119.497C116.966 122.029 113.64 123.295 110.314 123.295ZM101.807 94.2914C99.8812 94.2914 97.9562 95.0242 96.4906 96.4901C93.5588 99.4216 93.5588 104.192 96.4906 107.123L104.997 115.63C107.929 118.562 112.699 118.562 115.631 115.63C118.562 112.699 118.562 107.929 115.631 104.997L107.124 96.4901C105.658 95.0245 103.732 94.2914 101.807 94.2914Z"
                  fill="#013B58"
                />
                <path
                  opacity="0.5"
                  d="M22.4361 22.436C26.4404 18.4317 32.9323 18.4317 36.9363 22.436L45.4432 30.9429C49.4474 34.9471 49.4474 41.4391 45.4432 45.443C41.439 49.4472 34.947 49.4472 30.9431 45.443L22.4361 36.9361C18.4319 32.9321 18.4319 26.4402 22.4361 22.436Z"
                  fill="#CEEFF4"
                />
                <path
                  d="M38.193 51.1745C34.8672 51.1745 31.5413 49.9085 29.0093 47.3765L20.5027 38.8698C15.4386 33.8058 15.4386 25.5666 20.5024 20.5025C22.9554 18.0495 26.217 16.6984 29.6861 16.6984C33.1552 16.6984 36.4167 18.0495 38.8697 20.5025L47.3764 29.0091C52.4404 34.0732 52.4404 42.3124 47.3766 47.3765C44.8446 49.9088 41.5188 51.1745 38.193 51.1745ZM29.6861 22.1672C27.6777 22.1672 25.7896 22.9492 24.3696 24.3697C21.4378 27.3012 21.4378 32.0714 24.3696 35.0029L32.8763 43.5095C35.8081 46.441 40.5782 46.441 43.5094 43.5095C46.4412 40.578 46.4412 35.8079 43.5094 32.8764L35.0028 24.3697C33.5825 22.9495 31.6945 22.1672 29.6861 22.1672ZM22.4361 22.4362H22.4389H22.4361Z"
                  fill="#013B58"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1341">
                  <rect width="140" height="140" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h2>Generating Gift Ideas...</h2>
            <p>
              Hang tight. Our AI-Powered Genie is generating gift ideas. This
              can take about 5-10 seconds.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="recipient_container">
                <span className="glossy">
                  {" "}
                  <img src="../images/glossy.png"></img>
                </span>

                <h2>Tell us about your gift recipient</h2>
                <label>
                  <span>Who are you buying for?</span>
                  <input
                    type="text"
                    name="name"
                    value={recipientInfo.name}
                    onChange={handleChange}
                    placeholder="My mom"
                  />
                </label>
                <label>
                  <span>How old are they?</span>
                  <span className="suffix_info">
                    <input
                      type="number"
                      name="age"
                      value={recipientInfo.age}
                      onChange={handleChange}
                    />
                    <span className="suffix">years old</span>
                  </span>
                </label>
                <label>
                  <span>They identify as:</span>
                  <div className="gender-options">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={recipientInfo.gender === "female"}
                        onChange={handleChange}
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={recipientInfo.gender === "male"}
                        onChange={handleChange}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={recipientInfo.gender === "other"}
                        onChange={handleChange}
                      />
                      Other
                    </label>
                  </div>
                </label>
                <label>
                  <span>What do they like to do? Be specific!</span>
                  <textarea
                    name="interests"
                    value={recipientInfo.interests}
                    onChange={handleChange}
                    placeholder="Enter interests and hobbies"
                  />
                </label>
                <div className="btns">
                  <button
                    type="button"
                    className="btn back"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn continue"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                </div>

                <span className="steps">Step 1 / 2</span>
              </div>
            )}

            {step === 2 && (
              <div className="recipient_container">
                <span className="glossy">
                  {" "}
                  <img src="../images/glossy.png"></img>
                </span>
                <h2>Help us find the right gift!</h2>
                <label>
                  <span>What's the occasion?</span>
                  <input
                    type="text"
                    name="occasion"
                    value={giftPreferences.occasion}
                    onChange={handleGiftPreferencesChange}
                    placeholder="Birthday"
                  />
                </label>
                <label>
                  <span>What type of gift would you like?</span>
                  <select
                    name="giftType"
                    value={giftPreferences.giftType}
                    onChange={handleGiftPreferencesChange}
                  >
                    <option value="" disabled>
                      Select option
                    </option>
                    <option value="utensils">Utensils</option>
                    <option value="clothing">Clothing</option>
                    <option value="mobile">Mobile</option>
                  </select>
                </label>
                <label>
                  <span>What’s the maximum you’re willing to spend?</span>
                  <span className="suffix_info">
                    <span className="suffix usd">USD</span>
                    <input
                      type="number"
                      name="maxBudget"
                      value={giftPreferences.maxBudget}
                      onChange={handleGiftPreferencesChange}
                    />
                  </span>
                </label>
                <label>
                  <span>What country should we return the results for?</span>

                  <input
                    type="text"
                    name="country"
                    value={giftPreferences.country}
                    onChange={handleGiftPreferencesChange}
                    placeholder="Type Here"
                  />
                </label>
                <div className="btns">
                  <button
                    type="button"
                    className="btn back"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button type="submit" className="btn gift_btn">
                    {generatingGiftIdeas ? (
                      "Generating Gift Ideas..."
                    ) : (
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        ></svg>
                        Generate Gift Ideas
                      </span>
                    )}
                  </button>
                </div>
                <span>Step 2 / 2</span>
              </div>
            )}
          </form>
        )}
      </div>
    </>
  );
};
export default GiftRecipientForm;
