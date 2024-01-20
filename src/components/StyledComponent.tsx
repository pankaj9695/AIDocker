"use client";
import * as React from "react";
import styled from "styled-components";

function MyComponent() {
  return (
    <Span>
      <Div>Earning</Div>
      <Div2>Our protocol will have high end GPus to average </Div2>
      <Div3>
        <Div4>
          <Column>
            <Div5>
              <Div6>
                <Img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8474b3a137f7da544662c9a49b1eb01b2dbdc3fef359305f907e7d917396ccdb?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8474b3a137f7da544662c9a49b1eb01b2dbdc3fef359305f907e7d917396ccdb?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8474b3a137f7da544662c9a49b1eb01b2dbdc3fef359305f907e7d917396ccdb?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8474b3a137f7da544662c9a49b1eb01b2dbdc3fef359305f907e7d917396ccdb?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8474b3a137f7da544662c9a49b1eb01b2dbdc3fef359305f907e7d917396ccdb?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8474b3a137f7da544662c9a49b1eb01b2dbdc3fef359305f907e7d917396ccdb?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8474b3a137f7da544662c9a49b1eb01b2dbdc3fef359305f907e7d917396ccdb?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8474b3a137f7da544662c9a49b1eb01b2dbdc3fef359305f907e7d917396ccdb?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                />
                <Div7>💸</Div7>
                <Div8>Unpaid $AID</Div8>
                <Div9>12.98 $AID</Div9>
                <Div10>~24.65 USD</Div10>
              </Div6>
            </Div5>
          </Column>
          <Column2>
            <Div11>
              <Div12>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c0f6cfde34f4ee48655c0b3dc353986c5aebb503ccaec61b76a0bdf1572d01be?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f6cfde34f4ee48655c0b3dc353986c5aebb503ccaec61b76a0bdf1572d01be?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f6cfde34f4ee48655c0b3dc353986c5aebb503ccaec61b76a0bdf1572d01be?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f6cfde34f4ee48655c0b3dc353986c5aebb503ccaec61b76a0bdf1572d01be?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f6cfde34f4ee48655c0b3dc353986c5aebb503ccaec61b76a0bdf1572d01be?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f6cfde34f4ee48655c0b3dc353986c5aebb503ccaec61b76a0bdf1572d01be?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f6cfde34f4ee48655c0b3dc353986c5aebb503ccaec61b76a0bdf1572d01be?apiKey=caf73ded90744adfa0fe2d98abed61c0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c0f6cfde34f4ee48655c0b3dc353986c5aebb503ccaec61b76a0bdf1572d01be?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
                />
                <Div13>🤑</Div13>
                <Span2>
                  <Div14>Expeted Earning</Div14>
                  <Span3>24H</Span3>
                </Span2>
                <Div15>50.98 $AID</Div15>
                <Div16>~100.65 USD</Div16>
              </Div12>
            </Div11>
          </Column2>
        </Div4>
      </Div3>
    </Span>
  );
}

const Span = styled.span`
  justify-content: center;
  border-radius: 18px;
  border: 1px solid var(--Outline-1, rgba(255, 255, 255, 0.04));
  background: linear-gradient(
    149deg,
    rgba(255, 255, 255, 0.12) 18.99%,
    rgba(255, 255, 255, 0.05) 91.61%
  );
  backdrop-filter: blur(30px);
  display: flex;
  max-width: 543px;
  flex-direction: column;
  padding: 32px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div = styled.div`
  color: var(--text-icon-contrast-high, rgba(255, 255, 255, 0.9));
  letter-spacing: -0.2px;
  font: 700 24px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div2 = styled.div`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.2px;
  margin-top: 8px;
  font: 450 16px/140% Circular Std, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  justify-content: center;
  margin-top: 24px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div5 = styled.div`
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.1) 20.53%,
    rgba(255, 255, 255, 0.01) 196.23%
  );
  backdrop-filter: blur(34px);
  display: flex;
  flex-direction: column;
  aspect-ratio: 1;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const Div6 = styled.div`
  disply: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.9745762711864406;
  align-items: center;
  padding: 35px 53px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const Div7 = styled.div`
  position: relative;
  color: var(--text-icon-contrast-low, rgba(255, 255, 255, 0.4));
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  white-space: nowrap;
  font-size: 2em;
  text-shadow: 0 0 100px #eaebb0, 0 0 30px #eaebb0, 0 0 40px #eaebb0,
    0 0 50px #eaebb0;
  /* -webkit-box-shadow: 0px 0px 220px 68px rgba(234, 235, 176, 0.28);
  -moz-box-shadow: 0px 0px 220px 68px rgba(234, 235, 176, 0.28);
  box-shadow: 0px 0px 220px 68px rgba(234, 235, 176, 0.28); */
  font: 500 46px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
    white-space: initial;
  }
`;

const Div8 = styled.div`
  position: relative;
  align-self: stretch;
  color: var(--text-icon-contrast-low, rgba(255, 255, 255, 0.4));
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  margin-top: 54px;
  white-space: nowrap;
  font: 500 12px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    margin-top: 40px;
    white-space: initial;
  }
`;

const Div9 = styled.div`
  position: relative;
  color: var(--text-icon-contrast-high, rgba(255, 255, 255, 0.9));
  leading-trim: both;
  text-edge: cap;
  align-self: stretch;
  margin-top: 16px;
  white-space: nowrap;
  font: 700 24px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div10 = styled.div`
  position: relative;
  color: rgba(255, 255, 255, 0.4);
  leading-trim: both;
  text-edge: cap;
  margin-top: 14px;
  white-space: nowrap;
  font: 500 12px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div11 = styled.div`
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.1) 20.53%,
    rgba(255, 255, 255, 0.01) 196.23%
  );
  backdrop-filter: blur(34px);
  display: flex;
  flex-direction: column;
  aspect-ratio: 1;
  width: 100%;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const Div12 = styled.div`
  disply: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.9703389830508474;
  width: 100%;
  align-items: center;
  padding: 35px 49px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Div13 = styled.div`
  position: relative;
  color: var(--text-icon-contrast-low, rgba(255, 255, 255, 0.4));
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  white-space: nowrap;
  font: 500 46px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
    white-space: initial;
  }
`;

const Span2 = styled.span`
  position: relative;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 50px;
  gap: 6px;
  padding: 0 3px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div14 = styled.div`
  color: var(--text-icon-contrast-low, rgba(255, 255, 255, 0.4));
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 500 12px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Span3 = styled.span`
  color: #67d1a1;
  leading-trim: both;
  text-edge: cap;
  white-space: nowrap;
  justify-content: center;
  border-radius: 32px;
  background: linear-gradient(
    29deg,
    rgba(103, 209, 161, 0.21) -42.69%,
    rgba(103, 209, 161, 0) 132.77%
  );
  align-self: stretch;
  aspect-ratio: 1.8235294117647058;
  padding: 4px;
  font: 500 12px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div15 = styled.div`
  position: relative;
  color: var(--text-icon-contrast-high, rgba(255, 255, 255, 0.9));
  leading-trim: both;
  text-edge: cap;
  align-self: stretch;
  margin-top: 12px;
  white-space: nowrap;
  font: 700 24px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div16 = styled.div`
  position: relative;
  color: rgba(255, 255, 255, 0.4);
  leading-trim: both;
  text-edge: cap;
  margin-top: 14px;
  white-space: nowrap;
  font: 500 12px/120% Satoshi, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export default MyComponent;
