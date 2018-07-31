
# React router - Simple Example

This example is a blank project using routers in react. :)


## Config your application

In the app.tsx file we have a project basis, where we have the header, body with the routes and menu. Each part of the project is separated into isolated components and can be called anywhere.

```
render() {
        return (
            <div id="divMaster">
                <Header />
                <div>
                    <BrowserRouter >
                        <div>
                            <Menu />
                            <RouterConfigs />
                        </div>
                    </BrowserRouter >
                </div>
            </div >
        );
    }
```

## Adding Routes

To add a route, just create new lines `` `<Route exact = {true} path = {RoutePaths.home} component = {HomePage} />` `` configuring the folder and component to be called, which in our case is a page inside the "Pages" folder.
To create the route, you need to create a new item inside the ```RoutePaths``` class and then add to the new route that we have created.

```
        return (
            <Switch>
                <Route exact={true} path={RoutePaths.home} component={HomePage} />
                <Route path={RoutePaths.contato} component={ContatoPage} />
            </Switch>
        );
```

## Starting the application

To start our application, we will open our console and enter the command ```npm run start``` and our application will be running in the ```localhost: 3000```.

***

I hope it will be useful for beginners in ReactJs :)


~Douglas Volkart de Carvalho.
