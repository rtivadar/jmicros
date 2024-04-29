# Introduction to Microstates Analysis

## What are microstates

This is a jupyter book that illustrates a microstate analysis using the pycrostates and the neurokit2 packages.

EEG can be considered as a dynamical oscillatory system that can be described in terms of its state and dynamics, where the *state* describes the combination of variables that characterise the system at any given time *t*, and the *dynamics* describe how the *state* changes over time {cite}`khanna2015microstates`. One way of studying the EEG is given by finding ways to define momentary states of the system based on certain variables of interest and describing how characteristics of such states change in time. One such method is microstate analysis {cite}`lehmann1987eeg`.

 Microstates are series of stable or quasi-stable topographies, meaning that they represent a global brain state at one point in time. This global brain state comprises many local brain states, and its dynamics are not continuous, meaning that there are longer periods with small variance that can disappear quite rapidly, as is the case for focused attention and distraction, or wakefulness and sleep {cite}`lehmann2009eeg`. These brain states and brain state changes are associated with changes in the electrical field of the scalp as measured by the EEG.

%First, the shape of topography is reference-independent. That is, the measure of the electric field at the scalp will not change even if one chooses another reference (cf. Figure 1 in Brunet, Murray, & Michel, 2011). Second, the multivariate analyses used in topographic analyses (and more generally in analyses of global measures of the electric field at the scalp) allow for taking better advantage of the added information provided by high-density electrode montages while also retaining statistical rigor. Third, topographic information has a direct neurophysiologic interpretability. Physical laws dictate that topographic differences are indicative of changes in the configuration of the active cerebral sources (although the converse need not be true; e.g., Fender, 1987; Lehmann, 1987; Vaughan, 1982). Analyses can be formulated in a way that effects of strength and differences between conditions due to changes in sources configuration can be disentangled and treated independently. One practical consequence for researchers with strong a priori hypotheses regarding relevant time periods for a given process is that they can readily limit their analyses of these global measures of the electric field to these time periods while also gaining neurophysiologic interpretability, an advantage that is absent in traditional voltage waveform analyses.


```{note}
```

```{bibliography} 
```

[![Jupyter Book Badge](https://jupyterbook.org/badge.svg)](<(https://rtivadar.github.io/jmicros_ex/>)