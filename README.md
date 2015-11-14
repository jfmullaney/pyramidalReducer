# Pyramidical reducer

Takes a sequence of numbers and reduces its component integers down through addition down to a single integer.

## Install

## Install

Install [Node.js](https://nodejs.org/en/) and ensure that `npm` is added to your environment `PATH`

Run `npm install`

## Running script

Run `npm run start`

You will be prompted for `min` and `max` values

## Output

Each index between the `min` and `max` values will be output to a table with:

* Index - The current iteration
* Pyramidal sum - As defined at http://www.urbanninja.ninja/files/uncategorized/the-riddle-of-the-nines-the-nick-clark-sequence/ (formula taken from https://oeis.org/A000292)
* Reduced - the broken down addition of the sum
* Value - the final sum of all the reducer
* 
## Example

```
$ npm run start

> nicksnumbers@1.0.0 start c:\wamp\www\test\nicksnumbers
> node index.js

prompt: min:  1
prompt: max:  27
┌──────────┬───────────────┬────────────────────┬──────────┐
│  Index   │ Pyramidal sum │      Reducer       │  Value   │
├──────────┼───────────────┼────────────────────┼──────────┤
│    1     │      22       │        2+2         │    4     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    2     │       4       │         4          │    4     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    3     │      10       │        1+0         │    1     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    4     │      20       │        2+0         │    2     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    5     │      35       │        3+5         │    8     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    6     │      56       │        5+6         │    2     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    7     │      84       │        8+4         │    3     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    8     │      120      │       1+2+0        │    3     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    9     │      165      │       1+6+5        │    3     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    10    │      220      │       2+2+0        │    4     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    11    │      286      │       2+8+6        │    7     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    12    │      364      │       3+6+4        │    4     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    13    │      455      │       4+5+5        │    5     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    14    │      560      │       5+6+0        │    2     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    15    │      680      │       6+8+0        │    5     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    16    │      816      │       8+1+6        │    6     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    17    │      969      │       9+6+9        │    6     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    18    │     1140      │      1+1+4+0       │    6     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    19    │     1330      │      1+3+3+0       │    7     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    20    │     1540      │      1+5+4+0       │    1     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    21    │     1771      │      1+7+7+1       │    7     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    22    │     2024      │      2+0+2+4       │    8     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    23    │     2300      │      2+3+0+0       │    5     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    24    │     2600      │      2+6+0+0       │    8     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    25    │     2925      │      2+9+2+5       │    9     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    26    │     3276      │      3+2+7+6       │    9     │
├──────────┼───────────────┼────────────────────┼──────────┤
│    27    │     3654      │      3+6+5+4       │    9     │
└──────────┴───────────────┴────────────────────┴──────────┘
*** End of sequence ***
```
