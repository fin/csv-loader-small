# Fork of [csv-loader](https://github.com/theplatapi/csv-loader)

Reduces file size for huge CSVs; forked at 5a245e1d50e4f27fa80e6fbdccc8fa2cd73f180d


## Purpose
This CSV loader automatically converts data types, making it easy to import and start using data.


## Usage

Add the csv-loader to your webpack configuration:

``` javascript
const config = {
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: 'csv-loader',
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  }
```

The loader will translate csv files into JSON, with the following settings:
* automatically convert columns to the proper data type,
* parse the CSV header
* skip any blank lines in the file

## Configuration

Any options supported by Papa Parse can be passed to this loader with the options object. The current Papa Parse API is available [here](http://papaparse.com/docs#config).



## Not just a CSV loader
This module works with any column based file separated by deliminators. Simply set which extension to parse and the
loader will automatically figure out which deliminator to use by default. The deliminator can also be manually set.

## Credits

* Inspired by [dsv-loader](https://github.com/wbkd/dsv-loader)
* CSV parsing done with [Papa Parse](http://papaparse.com/)
* Original package: [csv-loader](https://github.com/theplatapi/csv-loader)
