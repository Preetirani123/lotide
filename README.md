# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @preetirani/lotide`

**Require it:**

`const _ = require('preetirani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * head - returns the first element in an array
  * tail - returns a new array without the first element
  * middle - returns the centre of an array, either one or two elements
  * assertArraysEqual - returns true if two input arrays are equal
  * assertEqual
  * countLetters
  * countOnly
  * eqArrays
  * eqObjects
  * assertObjectsEqual
  * findKey
  * findKeyByValue
  * flatten
  * letterPositions
  * map
  * raisin
  * takeUntil
  * without
