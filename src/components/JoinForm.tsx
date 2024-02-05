"use client";
import React, { useState } from "react";
import Select from "@/components/Select";
import { json } from "stream/consumers";
import { toast } from "react-toastify";

const JoinForm = () => {
  const [form, setForm] = useState({
    task: "",
    twitter: "",
    email: "",
    discord: "",
    hardware: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);

    toast("Form submitted successfully! We will contact you soon.");
    setForm({
      task: "",
      twitter: "",
      email: "",
      discord: "",
      hardware: "",
    });
  };
  return (
    <form className="flex px-4 flex-col justify-center self-stretch text-base text-white font-[450]">
      <header className="w-full flex flex-col sm:text-4xl text-2xl font-semibold text-center bg-clip-text bg-[linear-gradient(157deg,#FF852D_15.06%,#FF7878_97.93%)] leading-[56px] max-md:max-w-full">
        <span>Get Early Access to</span>
        <span className="heading-gradient font-bold">AIDOCKER</span>
      </header>
      <div className="mt-1 w-full tracking-tighter leading-7 text-center text-white text-opacity-70 max-md:max-w-full">
        Secure your spot! Fill in your details below, and stay tuned, we'll
        contact
        <br /> you with an early bird access to our network in the near future.
      </div>{" "}
      <div className="self-center mt-8 mb-8 tracking-tighter text-center leading-[160%] text-white text-opacity-70 max-md:max-w-full">
        Kindly fill out at least one of the contact fields provided below:
      </div>{" "}
      <div className="flex flex-col justify-center self-center px-12 py-12 mt-5 max-w-full text-lg font-bold tracking-tighter leading-6 rounded-3xl border-2 border-solid backdrop-blur-[6px] bg-white bg-opacity-10 border-white border-opacity-0 w-[700px] max-md:px-5">
        <div>
          <label htmlFor="task">Select Task</label>
          <Select setForm={setForm} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="twitter">Twitter</label>
          <input
            name="twitter"
            value={form.twitter}
            onChange={handleChange}
            type="url"
            placeholder="@twitter"
            className="justify-center sm:px-5 sm:py-6 px-2 py-2 my-3 focus:outline-none text-base tracking-normal whitespace-nowrap rounded-2xl bg-white bg-opacity-10 font-[450] text-white text-opacity-50 max-md:max-w-full"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="@gmail.com"
            type="email"
            className="justify-center sm:px-5 sm:py-6 px-2 py-2 my-3 focus:outline-none text-base tracking-normal whitespace-nowrap rounded-2xl bg-white bg-opacity-10 font-[450] text-white text-opacity-50 max-md:max-w-full"
          ></input>{" "}
        </div>
        <div className="flex flex-col">
          <label htmlFor="discord">Discord</label>
          <input
            name="discord"
            value={form.discord}
            onChange={handleChange}
            placeholder="@discord"
            type="url"
            className="justify-center sm:px-5 sm:py-6 px-2 py-2 my-3 text-base focus:outline-none tracking-normal whitespace-nowrap rounded-2xl bg-white bg-opacity-10 font-[450] text-white text-opacity-50 max-md:max-w-full"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="hardware">
            Ready to power up? Share the specs of the hardware you've got -
            processors, memory, storage?
          </label>
          <textarea
            name="hardware"
            value={form.hardware}
            onChange={handleChange}
            placeholder="Type here"
            className="shrink-0 my-3 sm:px-5 sm:py-6 px-2 py-2 focus:outline-none rounded-2xl bg-white text-white text-opacity-50 bg-opacity-10 h-[135px] max-md:max-w-full"
          />
        </div>
        <button
          className="justify-center self-center font-[450] px-7 py-3 !mt-5 sm:!mt-10 tracking-normal whitespace-nowrap bg-white shadow-sm leading-[120%] rounded-[30px] text-neutral-900 max-md:px-5 max-md:mt-10"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default JoinForm;
