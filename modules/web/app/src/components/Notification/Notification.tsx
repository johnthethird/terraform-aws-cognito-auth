/*
 * Copyright (c) 2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import {
  Collapse,
  Typography,
  withStyles,
  WithStyles
} from "@material-ui/core"
import * as React from "react"
import {
  compose,
  pure
} from "recompose"

import {
  withNotification,
  WithNotificationState
} from "enhancers"

import { Styles, styles } from "./Notification.styles"

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/**
 * Notification render properties
 */
export type NotificationRenderProps =
  & WithStyles<Styles>
  & WithNotificationState

/* ----------------------------------------------------------------------------
 * Presentational component
 * ------------------------------------------------------------------------- */

/**
 * Notification render component
 *
 * @param props - Properties
 *
 * @return JSX element
 */
export const NotificationRender: React.SFC<NotificationRenderProps> =
  ({ classes, data, show }) =>
    <Collapse in={show}>
      {data &&
        <Typography className={`${classes.root} ${classes[
          data.type.toLowerCase() as "success" | "error"
        ]}`}>
          {data.message}
        </Typography>
      }
    </Collapse>

/* ----------------------------------------------------------------------------
 * Enhanced component
 * ------------------------------------------------------------------------- */

/**
 * Notification component
 */
export const Notification =
  compose<NotificationRenderProps, {}>(
    withStyles(styles),
    withNotification(),
    pure
  )(NotificationRender)