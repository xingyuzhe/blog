while (true) {
  const task = taskQueue.pop();
  await execute(task);

  while (microTaskQueue.length) {
    const task = microTaskQueue.pop();
    await execute(task);
  }

  if (shouldRepaint()) {
    const animationTasks = animationQueue.slice();

    while (animationTasks.length) {
      const task = animationTasks.pop();
      await execute(task);
    }

    await repaint();
  }
}
