  # syntax=docker/dockerfile:1
  FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
  RUN curl --silent --location https://deb.nodesource.com/setup_18.x | bash -
  RUN apt-get install --yes nodejs
  RUN npm --version
  WORKDIR /App
  COPY OODWebServer/OODWebServer.sln ./
  COPY OODWebServer/OODWebServer/OODWebServer.csproj OODWebServer/
  # COPY Account.Tests/Account.Tests.csproj Account.Tests/
  RUN dotnet restore
  COPY . ./
  RUN dotnet publish -c Release -o OODWebServer/bin/Release/net6.0/ --no-restore
  FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS production
  COPY --from=build App/OODWebServer/bin/Release/net6.0/ App/
  WORKDIR /App
ENTRYPOINT [ "dotnet", "OODWebServer.dll", "--launch-profile OODWebServer-Production" ]