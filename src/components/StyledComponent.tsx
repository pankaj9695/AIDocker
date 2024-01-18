"use client";
import * as React from "react";
import styled from "styled-components";

function MyComponent() {
  return (
    <Div>
      <Div2>
        <Column>
          <Span>
            <Div3>
              <Span2>
                <Div4>Q4</Div4>
                <Div5>2023</Div5>
              </Span2>
              <Span3>Completed</Span3>
            </Div3>
            <Div6 />
            <Div7>Node as a service launch through Newrl</Div7>
            <Div8>
              Bringing a chance to mine tokens to masses in a few simple clicks
            </Div8>
            <Div9>Node as a service launch through Newrl</Div9>
            <Div10>Node as a service launch through Newrl</Div10>
          </Span>
        </Column>
        <Column2>
          <Div11>
            <Div12>
              <Span4>
                <Div13>Q1</Div13>
                <Div14>2022</Div14>
              </Span4>
              <Span5>Not Started</Span5>
            </Div12>
            <Div15 />
            <Div16>
              <Div17>
                <Column3>
                  <Span6>
                    <Div18>Plase 1.0</Div18>
                    <Div19>Node as a service launch through Newrl</Div19>
                    <Div20>
                      Bringing a chance to mine tokens to masses in a few simple
                      clicks
                    </Div20>
                    <Div21>Node as a service launch through Newrl</Div21>
                  </Span6>
                </Column3>
                <Column4>
                  <Span7>
                    <Div22>Plase 2.0</Div22>
                    <Div23>Node as a service launch through Newrl</Div23>
                    <Div24>
                      Bringing a chance to mine tokens to masses in a few simple
                      clicks
                    </Div24>
                    <Div25>Node as a service launch through Newrl</Div25>
                  </Span7>
                </Column4>
              </Div17>
            </Div16>
          </Div11>
        </Column2>
        <Column5>
          <Span8>
            <Span9>
              <Div26>Q2</Div26>
              <Div27>2022</Div27>
              <Span10>Not Started</Span10>
            </Span9>
            <Div28 />
            <Div29>Node as a service launch through Newrl</Div29>
            <Div30>
              Bringing a chance to mine tokens to masses in a few simple clicks
            </Div30>
            <Div31>Node as a service launch through Newrl</Div31>
          </Span8>
        </Column5>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  align-self: stretch;
  margin-top: 15px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div2 = styled.div`
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
  width: 28%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Span = styled.span`
  border-radius: 20px;
  border: 3px solid var(--stroke, rgba(255, 255, 255, 0.04));
  background: linear-gradient(
    158deg,
    #ffa336 -33.83%,
    #7d5d45 16.02%,
    #4c3e3a 39.31%,
    #353535 84.19%
  );
  backdrop-filter: blur(12px);
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 24px;
  @media (max-width: 991px) {
    margin-top: 21px;
    padding: 0 20px;
  }
`;

const Div3 = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 20px;
`;

const Span2 = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Div4 = styled.div`
  color: var(--Text-Medium, rgba(255, 255, 255, 0.7));
  letter-spacing: -0.8px;
  font: 500 20px/160% Circular Std, sans-serif;
`;

const Div5 = styled.div`
  color: var(--Text-Medium, rgba(255, 255, 255, 0.7));
  letter-spacing: -0.8px;
  font: 500 20px/160% Circular Std, sans-serif;
`;

const Span3 = styled.span`
  color: #ff5d42;
  letter-spacing: -0.2px;
  white-space: nowrap;
  justify-content: center;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.27);
  align-self: center;
  margin: auto 0;
  padding: 4px 8px;
  font: 500 12px/160% Circular Std, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div6 = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  margin-top: 23px;
  height: 1px;
`;

const Div7 = styled.div`
  color: #fff;
  letter-spacing: -0.2px;
  margin-top: 24px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Div8 = styled.div`
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
  color: whitesmoke;
`;

const Div9 = styled.div`
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Div10 = styled.div`
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
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
  border-radius: 20px;
  border: 3px solid var(--stroke, rgba(255, 255, 255, 0.04));
  background: linear-gradient(
    158deg,
    rgba(53, 53, 53, 0.39) -33.83%,
    #353535 84.19%
  );
  backdrop-filter: blur(12px);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  padding: 26px 24px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 21px;
    padding: 0 20px;
  }
`;

const Div12 = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Span4 = styled.span`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Div13 = styled.div`
  color: var(--Text-Medium, rgba(255, 255, 255, 0.7));
  letter-spacing: -0.8px;
  font: 500 20px/160% Circular Std, sans-serif;
`;

const Div14 = styled.div`
  color: var(--Text-Medium, rgba(255, 255, 255, 0.7));
  letter-spacing: -0.8px;
  font: 500 20px/160% Circular Std, sans-serif;
`;

const Span5 = styled.span`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  justify-content: center;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.27);
  align-self: center;
  margin: auto 0;
  padding: 4px 8px;
  font: 500 12px/160% Circular Std, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div15 = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  margin-top: 23px;
  height: 1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div16 = styled.div`
  margin-top: 24px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div17 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Span6 = styled.span`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 24px;
  }
`;

const Div18 = styled.div`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  font: 500 12px/160% Circular Std, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div19 = styled.div`
  color: #fff;
  letter-spacing: -0.2px;
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Div20 = styled.div`
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Div21 = styled.div`
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Column4 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Span7 = styled.span`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  @media (max-width: 991px) {
    margin-top: 24px;
  }
`;

const Div22 = styled.div`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  font: 500 12px/160% Circular Std, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div23 = styled.div`
  color: #fff;
  letter-spacing: -0.2px;
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Div24 = styled.div`
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Div25 = styled.div`
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Column5 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 22%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Span8 = styled.span`
  align-items: flex-start;
  align-self: stretch;
  border-radius: 20px;
  border: 3px solid var(--stroke, rgba(255, 255, 255, 0.04));
  background: linear-gradient(
    158deg,
    rgba(53, 53, 53, 0.39) -33.83%,
    #353535 84.19%
  );
  backdrop-filter: blur(12px);
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 24px 24px 50px;
  @media (max-width: 991px) {
    margin-top: 21px;
    padding: 0 20px;
  }
`;

const Span9 = styled.span`
  align-items: center;
  align-self: start;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Div26 = styled.div`
  color: var(--Text-Medium, rgba(255, 255, 255, 0.7));
  letter-spacing: -0.8px;
  align-self: stretch;
  font: 500 20px/160% Circular Std, sans-serif;
`;

const Div27 = styled.div`
  color: var(--Text-Medium, rgba(255, 255, 255, 0.7));
  letter-spacing: -0.8px;
  align-self: stretch;
  font: 500 20px/160% Circular Std, sans-serif;
`;

const Span10 = styled.span`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.2px;
  white-space: nowrap;
  justify-content: center;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.27);
  z-index: 1;
  flex-grow: 1;
  margin: auto 0;
  padding: 4px 8px;
  font: 500 12px/160% Circular Std, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const Div28 = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  align-self: stretch;
  margin-top: 23px;
  height: 1px;
`;

const Div29 = styled.div`
  align-self: stretch;
  color: #fff;
  letter-spacing: -0.2px;
  margin-top: 24px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Div30 = styled.div`
  align-self: stretch;
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin-top: 12px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

const Div31 = styled.div`
  align-self: stretch;
  letter-spacing: -0.2px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: var(
    --Text-Light,
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.4) 44.35%,
      rgba(182, 205, 255, 0.4) 99.75%
    )
  );
  margin: 12px 0 8px;
  font: 450 16px/22px Circular Std, sans-serif;
`;

export default MyComponent;
