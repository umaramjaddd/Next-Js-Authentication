// pages/page.tsx
"use client"
import React, { useState } from 'react';
import { z } from 'zod';
import { useClient } from 'next/client';

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  age: z.number().int().positive().lte(120, "Age must be less than or equal to 120"),
  email: z.string().email("Invalid email address"),
});

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      userSchema.parse(formData);
      setErrors({});
      // If valid, submit the form
      console.log('Form is valid. Submitting...', formData);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors = err.errors.reduce((acc, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 shadow-md p-6 rounded-lg bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
            <input
              className={`border ${errors.name ? 'border-red-500' : 'border-black'} rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500`}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </label>
          {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
            Age:
            <input
              className={`border ${errors.age ? 'border-red-500' : 'border-black'} rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500`}
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </label>
          {errors.age && <p className="text-red-500 text-xs italic">{errors.age}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
            <input
              className={`border ${errors.email ? 'border-red-500' : 'border-black'} rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500`}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;