# golf_guru
An app for keeping score during a round of golf as well as providing course info

-- Express required --
Install express: npm install express

## Running the server
```javascript
node app
```

## Hitting it from a browser
```javascript
http://127.0.0.1:3000/
```
Which will return a list of apps presently supported on this server, in the form of:

```javascript
{
    "golf_guru" : "http://127.0.0.1:3000/golf_guru"
}
```

## Hitting the Golf Guru app itself
```javascript
http://127.0.0.1:3000/golf_guru
```
Will return a list of courses presently supported in the app, in the form of:
```javascript
{
    "Pebble Beach" : "http://127.0.0.1:3000/golf_guru/courses/pebble-beach"
}
```
## Retrieving information on a course
```javascript
http://127.0.0.1:3000/golf_guru/courses/pebble-beach
```
Will return the information suitable for a blank score card for the course, in the form of:
```javascript
{
    name : "Oak Hollow",
    
    par  : 70,
    distances : { 
        gold : 6659,
        blue : 6177,
        white : 5807,
        red : 5200
    },

    front : {
        par : 35,
        distances : {
            gold : 3400,
            blue : 3159,
            white : 2937,
            red : 2605
        },
        holes : {
            "1" : { par:4, distances:{ gold:405, blue:376, white:358, red:315 } },
            "2" : ...
        }
    },

    back9 : {
        par : 70,
        distances : {
            gold : 3259,
            blue : 3018,
            white : 2870,
            red : 2595
        },
        holes : {
            "10" : { par:4, distances:{ gold:405, blue:376, white:358, red:315 } },
            "11" : ...
        }
    },
}
```
