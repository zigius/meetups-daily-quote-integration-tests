#!/usr/bin/env bash

export AWS_ACCESS_KEY_ID=foobar
export AWS_SECRET_ACCESS_KEY=foobar
export AWS_DEFAULT_REGION=us-east-1

aws --endpoint=http://localstack:4576 sqs create-queue --queue-name "iron_queue"
