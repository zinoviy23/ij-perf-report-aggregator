package main

import (
  "fmt"
  "github.com/alecthomas/kingpin"
  "log"
  "os"
  "report-aggregator/pkg/server"
  "report-aggregator/pkg/util"
)

func main() {
	logger := util.CreateLogger()
	defer func() {
		_ = logger.Sync()
	}()

	var app = kingpin.New("perf-db-server", "perf-db-server").Version("0.0.1")

	server.ConfigureServeCommand(app, logger)

	_, err := app.Parse(os.Args[1:])
	if err != nil {
		log.Fatal(fmt.Sprintf("%+v", err))
	}
}
