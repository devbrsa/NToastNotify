# NToastNotify
##### ASP.NET abstraction for javascript toastr to render server side managed Toast Notifications.

## Get Started
### 1. Install From Nuget
`Install-Package NToastNotify`

### 2. Add NtoastNotify to the ASP.NET Core Services
```C#
services.AddNToastNotify(new ToastOption()
            {
                ProgressBar = false,
                PositionClass = Constants.ToastPositions.BottomCenter
            });
```
**Or Simply**
```C#
services.AddNToastNotify();
```
> This line must be added above the `services.AddMvc()` line.

### 3. Include the reference to [toastr](http://codeseven.github.io/toastr/) Css and Javascript files in your html.
```html
<link href="toastr.css" rel="stylesheet"/>
<script src="toastr.js"></script>
```
**NOTE: toastr library depends on jQuery**

### 4. Add the following line in you html file. Preferably in your Layout Page.
```c#
@await Component.InvokeAsync("NToastNotify.Toastr")
```
This renders the View necessary for the view component

### Add your toast messages.

```c#
namespace NToastNotify.Web.Controllers
{
    public class HomeController : Controller
    {
        private IToastNotification _toastNotification;

        public HomeController(IToastNotification toastNotification)
        {
            _toastNotification = toastNotification;
        }
        public IActionResult Index()
        {
            _toastNotification.AddToastMessage("Success Title", "My Warning Message", ToastEnums.ToastType.Warning, new ToastOption()
            {
                PositionClass = NToastNotify.Constants.ToastPositions.BottomFullWidth
            });

            _toastNotification.AddToastMessage("Success Title", "My Success Message", ToastEnums.ToastType.Success, new ToastOption()
            {
                PositionClass = NToastNotify.Constants.ToastPositions.BottomRight
            });

            return View();

        }

        public IActionResult About()
        {
            _toastNotification.AddToastMessage("Success About Title", "My About Warning Message", ToastEnums.ToastType.Warning, new ToastOption()
            {
                PositionClass = NToastNotify.Constants.ToastPositions.BottomFullWidth
            });

            return View();
        }

        public IActionResult Contact()
        {
            _toastNotification.AddToastMessage("Redirected...", "You were redirected from Contact Page.", ToastEnums.ToastType.Info, new ToastOption()
            {
                PositionClass = NToastNotify.Constants.ToastPositions.TopCenter
            });
            return RedirectToAction("About"); ;
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
```
and they will be rendered as 
![Home Page][https://github.com/nabinked/ntoastnotify/sample/ntoastnotify.web/wwwroot/img/home.png]
![About Page][https://github.com/nabinked/ntoastnotify/sample/ntoastnotify.web/wwwroot/img/about.png]
![Contact Page][https://github.com/nabinked/ntoastnotify/sample/ntoastnotify.web/wwwroot/img/contact.png]