FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Toastr.csproj", "."]
RUN dotnet restore "Toastr.csproj"
COPY . .
RUN dotnet build "Toastr.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Toastr.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Toastr.dll"]