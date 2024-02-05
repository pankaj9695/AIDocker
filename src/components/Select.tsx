"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { name: "Select task" },
  { name: "Supply compute" },
  { name: "Supply dataset" },
  { name: "Train AI Models" },
];

const Select = ({
  setForm,
}: {
  setForm: React.Dispatch<
    React.SetStateAction<{
      task: string;
      twitter: string;
      email: string;
      discord: string;
      hardware: string;
    }>
  >;
}) => {
  const [selected, setSelected] = useState(people[0]);
  const handleTask = (task: string) => {
    setForm((prev) => {
      return { ...prev, task };
    });
  };

  return (
    <div className="">
      <Listbox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          handleTask(value.name);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className=" !my-3 sm:!px-5 sm:!py-6 !px-2 !py-2 relative w-full cursor-default rounded-2xl   pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm !text-base tracking-normal  bg-white bg-opacity-10 font-[450] text-white text-opacity-50 max-md:flex-wrap max-md:max-w-full">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full px-2 py-4 rounded-2xl overflow-auto bg-[#464545]  shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm  text-base tracking-normal  font-[450]  max-md:flex-wrap max-md:max-w-full">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default rounded-xl select-none py-3 px-2.5   ${
                      active
                        ? "bg-white bg-opacity-10 "
                        : "text-white text-opacity-50"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null} */}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
