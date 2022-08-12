# Eng-gruposbf-backend-javascript

In this application you can compare prices with pre-registered currencies, in addition to registering new ones, updating and deleting quotes for these currencies.
There are currently US Dollars, Euros and Indian Rupees registered, but you can register more currencies or update their quotes if necessary.

Despite this, I will use dummy currencies in the examples below.

You can use the cloud application to make your requests through the base path **https://app.heroku.com/myapp**. To see the suffixes of the routes, you can access the **[documentation](https://app.heroku.com/myapp/docs)** and do your tests there, by the API platform of your choice or by making the calls directly from your application.

If you want to download the project and test it locally, below are examples of how to do it. In this example, we will use port **3555**. Remember that if you download, you will need to create your own environment variables, with the example in the file _.env.example_

### Request for conversion of values into registered currencies

Just pass an X value, like _number_, in the price field, in the body of the **_POST_** request **http://localhost:3555/prices/compare** to return the updated value in the registered quotes, as in the example.

```
{
    "price": 99.99
}
```

By doing this, you will get a return similar to this one:
```
{
    "prices": [
        {
            "currencyInitials": "TST",
            "currency": "Test Currency",
            "price": "64,28"
        },
        {
            "currencyInitials": "EXP",
            "currency": "Example Currency",
            "price": "116,67"
        }
    ]
}
```

### Request to know the registered quotations

With the **GET** method, you can know all the registered quotes, through the URL **http://localhost:3555/quotations**, you will get a return similar to this one:
```
{
    "quotations": [
        {
            "_id": "90a00900000bbb90000000c9",
            "initials": "TST",
            "name": "Test Currency",
            "valueForOneReal": 1,55555,
            "createdAt": "2022-08-12T18:10:11.636Z",
            "updatedAt": "2022-08-12T18:10:11.636Z",
            "__v": 0
        },
        {
            "_id": "99a99900000abb90000099c9",
            "initials": "EXP",
            "name": "Example Currency",
            "valueForOneReal": 0.857,
            "createdAt": "2022-08-12T18:15:23.124Z",
            "updatedAt": "2022-08-12T18:15:23.124Z",
            "__v": 0
        }
    ]
}
```

### Request to save a quotation

To save a new quotation, you must send a body similar to the one below, to the url **http://localhost:3555/quotations**.
>It doesn't matter if in initials you pass with upper case or lower case, it will always save as upper case

```
{
    "name": "Test",
    "initials": "Tst",
    "valueForOneReal": 0.85
}
```

>You will always save the values of quotes compared to **one Real**. For example, on the day this documentation was made, a US Dollar is worth _5.08 Reais_, while an Argentine Peso is worth _0.038 Reais_

### Request to update a quotation

To save a new quotation, you must send a body similar to the one below, to the url **http://localhost:3555/quotations/{initials}**.
In this example, to update the _Test_ currency, we will pass its initials, saved in the example above like this: **http://localhost:3555/quotations/tst**.
>It doesn't matter if in initials you pass with upper case or lower case

```
{
    "valueForOneReal": 1.75
}
```

### Request to delete a quotation

Similar to the example of the update method, you will pass the URL in the same way to delete, but it is not necessary to pass a body to the request, as follows: **http://localhost:3555/quotations/tst**
>It doesn't matter if in initials you pass with upper case or lower case


