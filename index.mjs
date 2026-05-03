import os from 'node:os';
import { setOutput } from '@actions/core';

const numberOfCpus =
  typeof os.availableParallelism === "function"
    ? os.availableParallelism()
    : os.cpus().length;

setOutput("count", numberOfCpus);
