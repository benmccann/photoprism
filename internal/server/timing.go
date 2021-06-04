package server

import (
	servertiming "github.com/p768lwy3/gin-server-timing"
	"github.com/gin-gonic/gin"
)

func Timing() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Start
		timing := servertiming.FromContext(c)
		m := timing.NewMetric("total").Start()

		// Process request
		c.Next()

		// Stop timer
		m.Stop()

        // Write context to the header
        // servertiming.WriteHeader(c)
        h, _ := c.MustGet("Timing-Context").(*servertiming.Header)
		c.Writer.Header().Set("Server-Timing", h.String())
	}
}
