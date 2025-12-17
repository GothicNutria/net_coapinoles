using Microsoft.EntityFrameworkCore;
using net_coapinoles;
using net_coapinoles.Models;
using net_coapinoles.Services;

var builder = WebApplication.CreateBuilder(args);
string apiurl = builder.Configuration["ApiSettings:BaseUrl"];
ApiRoutes._apiUrl = apiurl;

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Add services to the container.
builder.Services.AddRazorPages();
// Autenticación + cookies
builder.Services.AddAuthentication("Cookies")
    .AddCookie("Cookies", options => {
        options.LoginPath = "/Login";
        options.AccessDeniedPath = "/Login";
        options.ExpireTimeSpan = TimeSpan.FromDays(1);
        options.SlidingExpiration = true;
    });

builder.Services.AddAuthorization();

// Sesiones
builder.Services.AddSession(options => {
    options.IdleTimeout = TimeSpan.FromMinutes(5);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

// Rutas protegidas
builder.Services.AddRazorPages(options => {
    options.Conventions.AuthorizeFolder("/");
    options.Conventions.AllowAnonymousToPage("/Login");
});

builder.Services.AddHttpContextAccessor();

var app = builder.Build();
ApiHelper.Accessor = app.Services.GetRequiredService<IHttpContextAccessor>();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();


app.UseSession();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.MapStaticAssets();
app.MapRazorPages().WithStaticAssets();

app.Run();
